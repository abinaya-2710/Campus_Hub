import { useEffect, useState, useContext } from "react";
import { db } from "../firebase";
import { collection, getDocs, updateDoc, doc, query } from "firebase/firestore";
import { AuthContext } from "../services/authContextType";
import { UserRole } from "../types/userRoles";
import { useNavigate } from "react-router-dom";
import { logger } from "../utils/logger";

interface User {
  uid: string;
  email: string;
  displayName: string;
  role: string;
  createdAt: any;
}

export function AdminPanel() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">;

  // Check if user is admin
  useEffect(() => {
    if (!authContext?.userProfile || authContext.userProfile.role !== UserRole.ADMIN) {
      navigate("/dashboard");
      return;
    }
  }, [authContext?.userProfile, navigate]);

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const usersQuery = query(collection(db, "users"));
        const snapshot = await getDocs(usersQuery);
        
        const usersData: User[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          usersData.push({
            uid: doc.id,
            email: data.email || "",
            displayName: data.displayName || "Unknown",
            role: data.role || UserRole.NORMAL_USER,
            createdAt: data.createdAt
          });
        });
        
        // Sort by creation date (newest first)
        usersData.sort((a, b) => {
          const aTime = a.createdAt?.toDate?.() || new Date(0);
          const bTime = b.createdAt?.toDate?.() || new Date(0);
          return bTime.getTime() - aTime.getTime();
        });
        
        setUsers(usersData);
        logger.success("Users loaded successfully", { count: usersData.length });
      } catch (error) {
        logger.error("Error fetching users", error);
        setMessageType("error");
        setMessage("Failed to load users. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const toggleUserSelection = (uid: string) => {
    const newSelected = new Set(selectedUsers);
    if (newSelected.has(uid)) {
      newSelected.delete(uid);
    } else {
      newSelected.add(uid);
    }
    setSelectedUsers(newSelected);
  };

  const promoteToClubHead = async () => {
    if (selectedUsers.size === 0) {
      setMessageType("error");
      setMessage("Please select at least one user");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    try {
      const updatePromises = Array.from(selectedUsers).map((uid) =>
        updateDoc(doc(db, "users", uid), { role: UserRole.CLUB_HEAD })
      );

      await Promise.all(updatePromises);

      // Update local state
      setUsers(
        users.map((user) =>
          selectedUsers.has(user.uid)
            ? { ...user, role: UserRole.CLUB_HEAD }
            : user
        )
      );

      setSelectedUsers(new Set());
      setMessageType("success");
      const promotedCount = selectedUsers.size;
      setMessage(`Promoted ${promotedCount} user(s) to Club Head`);
      logger.success("Users promoted successfully", { count: promotedCount });
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      logger.error("Error promoting users", error);
      setMessageType("error");
      setMessage("Failed to promote users. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const demoteToNormalUser = async () => {
    if (selectedUsers.size === 0) {
      setMessageType("error");
      setMessage("Please select at least one user");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    try {
      const updatePromises = Array.from(selectedUsers).map((uid) =>
        updateDoc(doc(db, "users", uid), { role: UserRole.NORMAL_USER })
      );

      await Promise.all(updatePromises);

      // Update local state
      setUsers(
        users.map((user) =>
          selectedUsers.has(user.uid)
            ? { ...user, role: UserRole.NORMAL_USER }
            : user
        )
      );

      setSelectedUsers(new Set());
      setMessageType("success");
      const demotedCount = selectedUsers.size;
      setMessage(`Demoted ${demotedCount} user(s) to Normal User`);
      logger.success("Users demoted successfully", { count: demotedCount });
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      logger.error("Error demoting users", error);
      setMessageType("error");
      setMessage("Failed to demote users. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case UserRole.ADMIN:
        return "bg-red-100 text-red-800";
      case UserRole.CLUB_HEAD:
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage user roles and permissions</p>
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

        {/* Action Buttons */}
        {selectedUsers.size > 0 && (
          <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-700">
              {selectedUsers.size} user(s) selected
            </p>
            <div className="flex gap-3">
              <button
                onClick={promoteToClubHead}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Promote to Club Head
              </button>
              <button
                onClick={demoteToNormalUser}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Demote to Normal User
              </button>
            </div>
          </div>
        )}

        {/* Users Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <p className="text-gray-500">Loading users...</p>
            </div>
          ) : users.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-500">No users found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={selectedUsers.size === users.length && users.length > 0}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedUsers(
                              new Set(users.map((u) => u.uid))
                            );
                          } else {
                            setSelectedUsers(new Set());
                          }
                        }}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 cursor-pointer"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Joined
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.uid}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedUsers.has(user.uid)}
                          onChange={() => toggleUserSelection(user.uid)}
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 cursor-pointer"
                        />
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {user.displayName}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(
                            user.role
                          )}`}
                        >
                          {user.role === UserRole.ADMIN
                            ? "Admin"
                            : user.role === UserRole.CLUB_HEAD
                            ? "Club Head"
                            : "Normal User"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {user.createdAt
                          ? new Date(
                              user.createdAt.toDate?.() || user.createdAt
                            ).toLocaleDateString()
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <p className="text-gray-600 text-sm mb-2">Total Users</p>
            <p className="text-3xl font-bold text-gray-900">{users.length}</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <p className="text-gray-600 text-sm mb-2">Club Heads</p>
            <p className="text-3xl font-bold text-blue-600">
              {users.filter((u) => u.role === UserRole.CLUB_HEAD).length}
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <p className="text-gray-600 text-sm mb-2">Normal Users</p>
            <p className="text-3xl font-bold text-gray-900">
              {users.filter((u) => u.role === UserRole.NORMAL_USER).length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
