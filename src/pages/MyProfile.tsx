import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase";
import { doc, updateDoc, getDoc, updatePassword, updateEmail } from "firebase/firestore";
import { updatePassword as authUpdatePassword, updateEmail as authUpdateEmail } from "firebase/auth";
import { AuthContext } from "../services/authContextType";
import { logger } from "../utils/logger";

export function MyProfile() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const user = authContext?.userProfile;

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">();
  const [memberSince, setMemberSince] = useState("");
  const [clubsCount, setClubsCount] = useState(0);

  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    phone: (user as any)?.phone || "",
    bio: (user as any)?.bio || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  useEffect(() => {
    if (user?.uid && user?.createdAt) {
      setMemberSince(new Date((user.createdAt as any).toDate?.() || user.createdAt).toLocaleDateString());
      setClubsCount((user as any)?.joinedClubs?.length || 0);
      setFormData((prev) => ({
        ...prev,
        displayName: user.displayName || "",
        email: user.email || ""
      }));
    }
  }, [user]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = async () => {
    if (!user?.uid) {
      setMessageType("error");
      setMessage("User not authenticated");
      return;
    }

    // Validate inputs
    if (!formData.displayName.trim()) {
      setMessageType("error");
      setMessage("Name cannot be empty");
      return;
    }

    // Validate password fields if provided
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      setMessageType("error");
      setMessage("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);

      // Update Firestore user document
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        displayName: formData.displayName,
        phone: formData.phone,
        bio: formData.bio,
        updatedAt: new Date()
      });

      // Update email if changed
      if (formData.email !== user.email && auth.currentUser) {
        try {
          await authUpdateEmail(auth.currentUser, formData.email);
          await updateDoc(userDocRef, { email: formData.email });
        } catch (emailErr) {
          logger.error("Error updating email", emailErr);
          setMessageType("error");
          setMessage("Failed to update email. Please try again.");
          setIsLoading(false);
          return;
        }
      }

      // Update password if provided
      if (formData.newPassword && auth.currentUser) {
        try {
          await authUpdatePassword(auth.currentUser, formData.newPassword);
          setFormData((prev) => ({
            ...prev,
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
          }));
        } catch (pwErr) {
          logger.error("Error updating password", pwErr);
          setMessageType("error");
          setMessage("Failed to update password. Please check your current password.");
          setIsLoading(false);
          return;
        }
      }

      setMessageType("success");
      setMessage("Profile updated successfully!");
      setIsEditing(false);
      logger.success("Profile updated", { uid: user.uid });
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      logger.error("Error saving profile", err);
      setMessageType("error");
      setMessage("Failed to save profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isAdmin = authContext?.userProfile?.role === "admin";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">My Profile</h2>
          <p className="text-gray-600">View and update your profile information</p>
        </div>

        {/* Message Alert */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              messageType === "success"
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            }`}
          >
            <p
              className={
                messageType === "success" ? "text-green-700" : "text-red-700"
              }
            >
              {message}
            </p>
          </div>
        )}

        {/* Profile Card */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#3a5b22] to-[#2d4619] px-6 py-8">
            <div className="flex items-start justify-between">
              <div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#3a5b22]">
                    {user?.displayName?.charAt(0).toUpperCase() || "U"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {user?.displayName || "User"}
                </h3>
                <p className="text-green-100 text-sm mt-1">
                  {user?.role === "admin"
                    ? "Administrator"
                    : user?.role === "club_head"
                    ? "Club Head"
                    : "Member"}
                </p>
              </div>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 bg-white text-[#3a5b22] rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            {!isEditing ? (
              // View Mode
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <p className="text-gray-900">{user?.email}</p>
                </div>

                {(user as any)?.phone && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <p className="text-gray-900">{(user as any).phone}</p>
                  </div>
                )}

                {(user as any)?.bio && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <p className="text-gray-900">{(user as any).bio}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Member Since
                  </label>
                  <p className="text-gray-900">
                    {memberSince || "Loading..."}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Clubs Joined
                  </label>
                  <p className="text-gray-900">
                    {clubsCount} clubs
                  </p>
                </div>
              </div>
            ) : (
              // Edit Mode
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveProfile();
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a5b22]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a5b22]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a5b22]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio (Optional)
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a5b22]"
                  />
                </div>

                {/* Password Section */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Change Password (Optional)
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        placeholder="Leave blank to keep current password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a5b22]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a5b22]"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 border-t border-gray-200 pt-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 px-4 py-2 bg-[#3a5b22] text-white rounded-lg hover:bg-[#2d4619] transition-colors font-medium disabled:opacity-50"
                  >
                    {isLoading ? "Saving..." : "Save Changes"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        displayName: user?.displayName || "",
                        email: user?.email || "",
                        phone: (user as any)?.phone || "",
                        bio: (user as any)?.bio || "",
                        currentPassword: "",
                        newPassword: "",
                        confirmPassword: ""
                      });
                    }}
                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
