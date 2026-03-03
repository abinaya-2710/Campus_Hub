import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../services/authContextType";

export function CreateEvent() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    capacity: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Check if user has permission to create events
  if (!authContext?.userProfile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <p className="text-gray-700 mb-4">Please log in to create events</p>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-[#3a5b22] text-white rounded-lg hover:bg-[#2d4619]"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const isClubHeadOrAdmin = authContext.userProfile.role === "club_head" || authContext.userProfile.role === "admin";

  if (!isClubHeadOrAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-sm p-6 text-center max-w-md">
          <h2 className="text-xl font-bold text-black mb-2">Access Denied</h2>
          <p className="text-gray-700 mb-4">
            Only club heads and admins can create events. If you'd like to become a club head, contact an administrator.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-[#3a5b22] text-white rounded-lg hover:bg-[#2d4619]"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (!formData.title || !formData.date || !formData.location) {
        setError("Please fill in all required fields");
        setIsLoading(false);
        return;
      }

      const idToken = await authContext.currentUser?.getIdToken();
      if (!idToken) {
        setError("Authentication failed");
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `${import.meta.env.VITE_FUNCTIONS_URL}/createEvent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${idToken}`
          },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            date: formData.date,
            time: formData.time,
            location: formData.location,
            capacity: parseInt(formData.capacity) || 0,
            clubId: authContext.userProfile.clubId || ""
          })
        }
      );

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Failed to create event");
        setIsLoading(false);
        return;
      }

      // Success - navigate back to dashboard
      navigate("/dashboard?success=Event created successfully!");
    } catch (err) {
      setError("Error creating event: " + (err instanceof Error ? err.message : "Unknown error"));
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="text-[#0f3dde] hover:underline font-medium mb-6 flex items-center gap-2"
        >
          ← Back to Dashboard
        </button>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-black mb-8">Create Event</h1>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-[10px] p-4 mb-6">
              <p className="text-sm font-medium text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="text-sm font-medium text-black block mb-2">
                Event Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Tech Workshop 2026"
                className="w-full h-10 rounded-[10px] border border-[#d9d9d9] px-3 py-2 text-sm font-medium placeholder:text-[#d9d9d9] focus:outline-none focus:border-[#3a5b22] focus:ring-1 focus:ring-[#3a5b22] transition-colors"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-black block mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your event..."
                rows={4}
                className="w-full rounded-[10px] border border-[#d9d9d9] px-3 py-2 text-sm font-medium placeholder:text-[#d9d9d9] focus:outline-none focus:border-[#3a5b22] focus:ring-1 focus:ring-[#3a5b22] transition-colors"
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-black block mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full h-10 rounded-[10px] border border-[#d9d9d9] px-3 py-2 text-sm font-medium focus:outline-none focus:border-[#3a5b22] focus:ring-1 focus:ring-[#3a5b22] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-black block mb-2">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full h-10 rounded-[10px] border border-[#d9d9d9] px-3 py-2 text-sm font-medium focus:outline-none focus:border-[#3a5b22] focus:ring-1 focus:ring-[#3a5b22] transition-colors"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="text-sm font-medium text-black block mb-2">
                Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., Main Auditorium"
                className="w-full h-10 rounded-[10px] border border-[#d9d9d9] px-3 py-2 text-sm font-medium placeholder:text-[#d9d9d9] focus:outline-none focus:border-[#3a5b22] focus:ring-1 focus:ring-[#3a5b22] transition-colors"
                required
              />
            </div>

            {/* Capacity */}
            <div>
              <label className="text-sm font-medium text-black block mb-2">
                Event Capacity
              </label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleInputChange}
                placeholder="Maximum number of attendees"
                className="w-full h-10 rounded-[10px] border border-[#d9d9d9] px-3 py-2 text-sm font-medium placeholder:text-[#d9d9d9] focus:outline-none focus:border-[#3a5b22] focus:ring-1 focus:ring-[#3a5b22] transition-colors"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 h-10 bg-[#3a5b22] rounded-[10px] border border-[#3a5b22] hover:bg-[#2d4619] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer font-bold text-sm text-white"
              >
                {isLoading ? "Creating..." : "Create Event"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="flex-1 h-10 bg-gray-200 rounded-[10px] border border-gray-300 hover:bg-gray-300 transition-colors cursor-pointer font-bold text-sm text-black"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
