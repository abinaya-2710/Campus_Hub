import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { logger } from "../utils/logger";

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      logger.success("User signed in successfully", { email: userCredential.user.email });
      // Navigate to dashboard on successful login
      navigate("/dashboard");
    } catch (err: any) {
      logger.error("Sign in failed", err);
      const errorMessage = err.code === "auth/user-not-found"
        ? "Email not found. Please sign up first."
        : err.code === "auth/wrong-password"
        ? "Incorrect password. Please try again."
        : err.code === "auth/invalid-email"
        ? "Please enter a valid email address."
        : err.code === "auth/too-many-requests"
        ? "Too many login attempts. Please try again later."
        : err.message || "Failed to sign in. Please check your credentials.";
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col lg:flex-row" data-name="Sign in">
      {/* Form Container */}
      <div className="w-full lg:w-[45%] px-4 sm:px-6 lg:px-12 py-8 lg:py-16 flex items-center justify-center lg:justify-start">
        <div className="w-full max-w-[404px]">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-12 mt-4 sm:mt-8">
            Sign In
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-[10px] p-3">
                <p className="text-sm font-medium text-red-700">{error}</p>
              </div>
            )}

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-black">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full h-10 rounded-[10px] border border-[#d9d9d9] px-3 py-2 text-sm font-medium placeholder:text-[#d9d9d9] focus:outline-none focus:border-[#3a5b22] focus:ring-1 focus:ring-[#3a5b22] transition-colors"
                required
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-black">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full h-10 rounded-[10px] border border-[#d9d9d9] px-3 py-2 text-sm font-medium placeholder:text-[#d9d9d9] focus:outline-none focus:border-[#3a5b22] focus:ring-1 focus:ring-[#3a5b22] transition-colors"
                required
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-[#0f3dde] hover:underline bg-transparent border-0 p-0 cursor-pointer"
              >
                Forgot password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-10 bg-[#3a5b22] rounded-[10px] border border-[#3a5b22] hover:bg-[#2d4619] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer font-bold text-sm text-white mt-8"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm font-medium text-black mt-8">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-[#0f3dde] hover:underline cursor-pointer bg-transparent border-0 p-0"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>

      {/* Hero Image - Hidden on Mobile */}
      <div className="hidden lg:flex w-full lg:w-[55%] items-center justify-center overflow-hidden rounded-bl-[45px] rounded-tl-[45px] bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9]">
        <img
          alt="Decorative plant image"
          className="w-full h-full object-cover"
          src="https://via.placeholder.com/800x1000/c8e6c9/2d5016?text=Campus+Hub"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
}
