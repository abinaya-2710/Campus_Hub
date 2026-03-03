import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { AuthContext } from "../services/authContextType";
import { logger } from "../utils/logger";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  club: string;
  clubId: string;
  attendees: number;
  maxAttendees?: number;
  createdBy: string;
}

export function Events() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Wait for auth context to load and have user data
    if (!authContext || authContext.isLoading || !authContext?.userProfile?.uid) {
      logger.log("Waiting for auth context", { isLoading: authContext?.isLoading });
      return;
    }

    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError("");
        // Fetch all events, sorted by date
        const eventsQuery = query(
          collection(db, "events"),
          orderBy("date", "asc")
        );
        const snapshot = await getDocs(eventsQuery);
        
        const eventsData: Event[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          eventsData.push({
            id: doc.id,
            title: data.title || "Untitled Event",
            description: data.description || "",
            date: data.date || "",
            time: data.time || "",
            location: data.location || "",
            club: data.club || "Unknown Club",
            clubId: data.clubId || "",
            attendees: data.attendees?.length || 0,
            maxAttendees: data.maxAttendees,
            createdBy: data.createdBy || ""
          });
        });
        
        setEvents(eventsData);
        logger.success("Events loaded", { count: eventsData.length });
      } catch (err) {
        logger.error("Error fetching events", err);
        setError("Failed to load events. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [authContext?.isLoading, authContext?.userProfile?.uid]);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    } catch {
      return dateString;
    }
  };

  const isEventUpcoming = (dateString: string) => {
    try {
      return new Date(dateString) >= new Date();
    } catch {
      return false;
    }
  };

  const upcomingEvents = events.filter(e => isEventUpcoming(e.date));
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
          <h2 className="text-3xl font-bold text-black mb-2">Upcoming Events</h2>
          <p className="text-gray-600">Discover and attend events happening across campus</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-red-700">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3a5b22] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading events...</p>
            </div>
          </div>
        )}

        {/* Events Grid */}
        {!loading && upcomingEvents.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No upcoming events at the moment.</p>
            <p className="text-gray-400 mt-2">Check back soon for new events!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Event Card */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-black flex-1">{event.title}</h3>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="font-medium">📅</span>
                      {formatDate(event.date)}
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="font-medium">🕐</span>
                        {event.time}
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="font-medium">📍</span>
                        {event.location}
                      </div>
                    )}
                    {event.club && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="font-medium">🎓</span>
                        {event.club}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      {event.maxAttendees ? (
                        <span>{event.attendees} / {event.maxAttendees} attending</span>
                      ) : (
                        <span>{event.attendees} attending</span>
                      )}
                    </div>
                    <button className="px-4 py-2 bg-[#3a5b22] text-white rounded-lg hover:bg-[#2d4619] transition-colors font-medium text-sm">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
