import { useState, useEffect, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, orderBy, getDocs, limit } from "firebase/firestore";
import { AuthContext } from "../services/authContextType";
import { logger } from "../utils/logger";

interface UserProfile {
  name: string;
  email: string;
  role: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  club: string;
  attendees: number;
}

interface Club {
  id: string;
  name: string;
  members: number;
}

export function Dashboard() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [searchParams] = useSearchParams();
  const [successMessage, setSuccessMessage] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [upcomingClubs, setUpcomingClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);

  // Use actual user data from auth context
  const user = authContext?.userProfile ? {
    name: authContext.userProfile.displayName,
    email: authContext.userProfile.email,
    role: authContext.userProfile.role
  } : {
    name: "User",
    email: "loading...",
    role: "normal_user"
  };

  useEffect(() => {
    // Check for success message in URL
    const message = searchParams.get("success");
    if (message) {
      setSuccessMessage(message);
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  }, [searchParams]);

  // Fetch events and clubs from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch events
        const eventsQuery = query(
          collection(db, "events"),
          orderBy("date", "asc"),
          limit(6)
        );
        const eventsSnapshot = await getDocs(eventsQuery);
        const eventsData: Event[] = [];
        eventsSnapshot.forEach((doc) => {
          const data = doc.data();
          // Only include upcoming events
          if (new Date(data.date) >= new Date()) {
            eventsData.push({
              id: doc.id,
              title: data.title || "Untitled Event",
              date: data.date || "",
              club: data.club || "Unknown Club",
              attendees: data.attendees?.length || 0
            });
          }
        });
        setEvents(eventsData);

        // Fetch clubs
        const clubsQuery = query(collection(db, "clubs"), limit(6));
        const clubsSnapshot = await getDocs(clubsQuery);
        const clubsData: Club[] = [];
        clubsSnapshot.forEach((doc) => {
          const data = doc.data();
          clubsData.push({
            id: doc.id,
            name: data.name || "Unnamed Club",
            members: data.members?.length || 0
          });
        });
        setUpcomingClubs(clubsData);

        logger.success("Dashboard data loaded", {
          events: eventsData.length,
          clubs: clubsData.length
        });
      } catch (error) {
        logger.error("Error fetching dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    await authContext?.logout?.();
    navigate("/login");
  };

  const isClubHeadOrAdmin = authContext?.userProfile?.role === "club_head" || authContext?.userProfile?.role === "admin";
  const isAdmin = authContext?.userProfile?.role === "admin";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
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
                onClick={handleLogout}
                className="px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">Welcome, {user.name}!</h2>
          <p className="text-gray-600 mb-4">{user.email}</p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">
              Role: <span className={`font-medium ${
                authContext?.userProfile?.role === "admin" ? "text-purple-600" :
                authContext?.userProfile?.role === "club_head" ? "text-blue-600" :
                "text-gray-600"
              }`}>
                {authContext?.userProfile?.role?.replace("_", " ").toUpperCase() || "STUDENT"}
              </span>
            </p>
          </div>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-green-700">{successMessage}</p>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Create Event - Only for Club Heads and Admins */}
          {isClubHeadOrAdmin && (
            <button
              onClick={() => navigate("/create-event")}
              className="bg-[#3a5b22] text-white rounded-lg p-4 hover:bg-[#2d4619] transition-colors text-left"
            >
              <div className="text-2xl mb-2">📝</div>
              <div className="font-semibold">Create Event</div>
              <div className="text-sm opacity-90">Organize new event</div>
            </button>
          )}

          {/* Admin Panel - Only for Admins */}
          {isAdmin && (
            <button
              onClick={() => navigate("/admin")}
              className="bg-purple-600 text-white rounded-lg p-4 hover:bg-purple-700 transition-colors text-left"
            >
              <div className="text-2xl mb-2">⚙️</div>
              <div className="font-semibold">Admin Panel</div>
              <div className="text-sm opacity-90">Manage users & clubs</div>
            </button>
          )}

          <div 
            onClick={() => navigate("/events")}
            className="bg-white text-black rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="text-2xl mb-2">📅</div>
            <div className="font-semibold">Upcoming Events</div>
            <div className="text-sm text-gray-600">{events.length} events</div>
          </div>

          <div 
            onClick={() => navigate("/clubs")}
            className="bg-white text-black rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="text-2xl mb-2">🎓</div>
            <div className="font-semibold">My Clubs</div>
            <div className="text-sm text-gray-600">Explore clubs</div>
          </div>

          <div 
            onClick={() => navigate("/profile")}
            className="bg-white text-black rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="text-2xl mb-2">👥</div>
            <div className="font-semibold">My Profile</div>
            <div className="text-sm text-gray-600">View & edit</div>
          </div>
        </div>

        {/* Events and Clubs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-black mb-6">Upcoming Events</h3>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3a5b22] mx-auto mb-2"></div>
                    <p className="text-gray-600 text-sm">Loading events...</p>
                  </div>
                </div>
              ) : events.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No upcoming events at the moment.</p>
                  <button
                    onClick={() => navigate("/events")}
                    className="text-[#0f3dde] hover:underline mt-2"
                  >
                    View all events
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => navigate("/events")}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-black">{event.title}</h4>
                          <p className="text-sm text-gray-600">{event.club}</p>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>👥 {event.attendees} attendees</span>
                        <button 
                          className="text-[#0f3dde] hover:underline"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/events");
                          }}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Popular Clubs */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-black mb-6">Popular Clubs</h3>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3a5b22] mx-auto mb-2"></div>
                    <p className="text-gray-600 text-sm">Loading clubs...</p>
                  </div>
                </div>
              ) : upcomingClubs.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No clubs available yet.</p>
                  <button
                    onClick={() => navigate("/clubs")}
                    className="text-[#0f3dde] hover:underline mt-2"
                  >
                    Explore clubs
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {upcomingClubs.map((club) => (
                    <div
                      key={club.id}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => navigate("/clubs")}
                    >
                      <h4 className="font-semibold text-black mb-1">{club.name}</h4>
                      <p className="text-sm text-gray-600">👥 {club.members} members</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
