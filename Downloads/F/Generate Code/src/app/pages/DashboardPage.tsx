import { useNavigate } from "react-router";
import { LogOut, User, Settings, Home } from "lucide-react";
import { toast } from "sonner";

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div className="bg-white size-full overflow-auto">
      {/* Header */}
      <header className="bg-[#3a5b22] text-white px-8 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <Home className="size-6" />
          <h1 className="text-2xl font-['Poppins:Bold',sans-serif]">Dashboard</h1>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-white text-[#3a5b22] rounded-lg hover:bg-gray-100 transition-colors font-['Poppins:Medium',sans-serif]"
        >
          <LogOut className="size-4" />
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-['Poppins:Bold',sans-serif] text-black mb-2">Welcome to your Dashboard!</h2>
          <p className="text-gray-600 font-['Poppins:Medium',sans-serif]">You have successfully logged in.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#3a5b22] bg-opacity-10 p-3 rounded-lg">
                <User className="size-6 text-[#3a5b22]" />
              </div>
              <h3 className="text-xl font-['Poppins:Bold',sans-serif] text-black">Profile</h3>
            </div>
            <p className="text-gray-600 font-['Poppins:Medium',sans-serif] text-sm">Manage your account settings and preferences</p>
            <button className="mt-4 text-[#0f3dde] font-['Poppins:Medium',sans-serif] text-sm hover:underline">
              View Profile →
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#3a5b22] bg-opacity-10 p-3 rounded-lg">
                <Settings className="size-6 text-[#3a5b22]" />
              </div>
              <h3 className="text-xl font-['Poppins:Bold',sans-serif] text-black">Settings</h3>
            </div>
            <p className="text-gray-600 font-['Poppins:Medium',sans-serif] text-sm">Configure your application preferences</p>
            <button className="mt-4 text-[#0f3dde] font-['Poppins:Medium',sans-serif] text-sm hover:underline">
              Open Settings →
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#3a5b22] bg-opacity-10 p-3 rounded-lg">
                <Home className="size-6 text-[#3a5b22]" />
              </div>
              <h3 className="text-xl font-['Poppins:Bold',sans-serif] text-black">Overview</h3>
            </div>
            <p className="text-gray-600 font-['Poppins:Medium',sans-serif] text-sm">View your activity and statistics</p>
            <button className="mt-4 text-[#0f3dde] font-['Poppins:Medium',sans-serif] text-sm hover:underline">
              View Details →
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-gradient-to-r from-[#3a5b22] to-[#2d4619] rounded-xl p-8 text-white">
          <h3 className="text-2xl font-['Poppins:Bold',sans-serif] mb-4">Getting Started</h3>
          <p className="font-['Poppins:Medium',sans-serif] mb-6 opacity-90">
            This is a demo dashboard. In a real application, you would see your personalized content here.
          </p>
          <ul className="space-y-2 font-['Poppins:Medium',sans-serif]">
            <li className="flex items-center gap-2">
              <span className="size-2 bg-white rounded-full"></span>
              Email and password validation is working
            </li>
            <li className="flex items-center gap-2">
              <span className="size-2 bg-white rounded-full"></span>
              Navigation between pages is functional
            </li>
            <li className="flex items-center gap-2">
              <span className="size-2 bg-white rounded-full"></span>
              Toast notifications provide feedback
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
