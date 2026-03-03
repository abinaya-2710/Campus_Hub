import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, getDocs, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { AuthContext } from "../services/authContextType";
import { logger } from "../utils/logger";

interface Club {
  id: string;
  name: string;
  description: string;
  icon?: string;
  memberCount: number;
  president?: string;
  createdAt?: string;
}

export function MyClubs() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [allClubs, setAllClubs] = useState<Club[]>([]);
  const [joinedClubs, setJoinedClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"joined" | "explore">("joined");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Wait for auth context to load and have user data
    if (!authContext || authContext.isLoading || !authContext?.userProfile?.uid) {
      logger.log("Waiting for auth context", { isLoading: authContext?.isLoading });
      return;
    }

    const fetchClubs = async () => {
      try {
        setLoading(true);
        setError("");
        const clubsQuery = query(collection(db, "clubs"));
        const snapshot = await getDocs(clubsQuery);
        
        const clubsData: Club[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          clubsData.push({
            id: doc.id,
            name: data.name || "Unnamed Club",
            description: data.description || "",
            icon: data.icon,
            memberCount: data.members?.length || 0,
            president: data.president,
            createdAt: data.createdAt
          });
        });
        
        setAllClubs(clubsData);

        // Filter joined clubs based on user profile
        const userProfile = authContext.userProfile;
        const joined = clubsData.filter((club) => {
          // Store joined clubs in user profile if available
          return (userProfile as any)?.joinedClubs?.includes(club.id);
        });
        
        setJoinedClubs(joined);
        logger.success("Clubs loaded", { total: clubsData.length, joined: joined.length });
      } catch (err) {
        logger.error("Error fetching clubs", err);
        setError("Failed to load clubs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, [authContext?.isLoading, authContext?.userProfile?.uid]);

  const joinClub = async (clubId: string) => {
    if (!authContext?.userProfile?.uid) {
      setError("Please sign in first");
      return;
    }

    try {
      // Add club to user's joinedClubs array
      const userDocRef = doc(db, "users", authContext.userProfile.uid);
      await updateDoc(userDocRef, {
        joinedClubs: arrayUnion(clubId)
      });

      // Add user to club's members array
      const clubDocRef = doc(db, "clubs", clubId);
      await updateDoc(clubDocRef, {
        members: arrayUnion(authContext.userProfile.uid)
      });

      // Update local state
      const club = allClubs.find((c) => c.id === clubId);
      if (club) {
        setJoinedClubs([...joinedClubs, club]);
        setAllClubs(
          allClubs.map((c) =>
            c.id === clubId ? { ...c, memberCount: c.memberCount + 1 } : c
          )
        );
      }

      setMessage(`Successfully joined ${club?.name}!`);
      setTimeout(() => setMessage(""), 3000);
      logger.success("Joined club", { clubId });
    } catch (err) {
      logger.error("Error joining club", err);
      setError("Failed to join club. Please try again.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const leaveClub = async (clubId: string) => {
    if (!authContext?.userProfile?.uid) {
      setError("Please sign in first");
      return;
    }

    try {
      // Remove club from user's joinedClubs array
      const userDocRef = doc(db, "users", authContext.userProfile.uid);
      await updateDoc(userDocRef, {
        joinedClubs: arrayRemove(clubId)
      });

      // Remove user from club's members array
      const clubDocRef = doc(db, "clubs", clubId);
      await updateDoc(clubDocRef, {
        members: arrayRemove(authContext.userProfile.uid)
      });

      // Update local state
      const club = joinedClubs.find((c) => c.id === clubId);
      setJoinedClubs(joinedClubs.filter((c) => c.id !== clubId));
      setAllClubs(
        allClubs.map((c) =>
          c.id === clubId ? { ...c, memberCount: Math.max(0, c.memberCount - 1) } : c
        )
      );

      setMessage(`Left ${club?.name}`);
      setTimeout(() => setMessage(""), 3000);
      logger.success("Left club", { clubId });
    } catch (err) {
      logger.error("Error leaving club", err);
      setError("Failed to leave club. Please try again.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const availableClubs = allClubs.filter(
    (club) => !joinedClubs.some((joined) => joined.id === club.id)
  );

  const isAdmin = authContext?.userProfile?.role === "admin";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate("/dashboard")}
              className="text-[#3a5b22] hover:text-[#2d4619] font-medium flex items-center gap-2"
            >
              ← Back
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#3a5b22] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <h1 className="text-2xl font-bold text-[#3a5b22]">Campus Hub</h1>
            </div>
            <div className="flex items-center gap-2">
              {isAdmin && (
                <button
                  onClick={() => navigate("/admin")}
                  className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors font-medium text-sm"
                >
                  Admin
                </button>
              )}
              <button
                onClick={() => {
                  authContext?.logout?.();
                  navigate("/login");
                }}
                className="px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">My Clubs</h2>
          <p className="text-gray-600">Join clubs and connect with fellow students</p>
        </div>

        {/* Messages */}
        {message && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-green-700">{message}</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-red-700">{error}</p>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("joined")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "joined"
                ? "text-[#3a5b22] border-b-2 border-[#3a5b22]"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            My Clubs ({joinedClubs.length})
          </button>
          <button
            onClick={() => setActiveTab("explore")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "explore"
                ? "text-[#3a5b22] border-b-2 border-[#3a5b22]"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Explore Clubs ({availableClubs.length})
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3a5b22] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading clubs...</p>
            </div>
          </div>
        )}

        {/* My Clubs Tab */}
        {!loading && activeTab === "joined" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {joinedClubs.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg mb-4">You haven't joined any clubs yet.</p>
                <button
                  onClick={() => setActiveTab("explore")}
                  className="px-6 py-2 bg-[#3a5b22] text-white rounded-lg hover:bg-[#2d4619] transition-colors"
                >
                  Explore Clubs
                </button>
              </div>
            ) : (
              joinedClubs.map((club) => (
                <div
                  key={club.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-3">{club.icon || "🎓"}</div>
                  <h3 className="text-lg font-bold text-black mb-2">{club.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{club.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{club.memberCount} members</span>
                    {club.president && <span>President: {club.president}</span>}
                  </div>
                  <button
                    onClick={() => leaveClub(club.id)}
                    className="w-full px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors font-medium"
                  >
                    Leave Club
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {/* Explore Clubs Tab */}
        {!loading && activeTab === "explore" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableClubs.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">You've joined all available clubs!</p>
              </div>
            ) : (
              availableClubs.map((club) => (
                <div
                  key={club.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-3">{club.icon || "🎓"}</div>
                  <h3 className="text-lg font-bold text-black mb-2">{club.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{club.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{club.memberCount} members</span>
                    {club.president && <span>President: {club.president}</span>}
                  </div>
                  <button
                    onClick={() => joinClub(club.id)}
                    className="w-full px-4 py-2 bg-[#3a5b22] text-white rounded-lg hover:bg-[#2d4619] transition-colors font-medium"
                  >
                    Join Club
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
