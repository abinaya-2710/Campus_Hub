import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../services/authContextType";
import { logger } from "../../utils/logger";

export default function SignUpForm() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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
    if (!agreedToTerms) {
      setError("Please agree to the terms & policy");
      return;
    }
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Update display name
      await updateProfile(userCredential.user, {
        displayName: formData.name
      });

      logger.success("User signed up successfully", { email: userCredential.user.email });
      
      // Show success message
      setSuccess(true);
      setIsLoading(false);
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err: any) {
      logger.error("Sign up error", err);
      const errorMessage = err.code === "auth/email-already-in-use"
        ? "Email already in use. Please use a different email or try logging in."
        : err.code === "auth/weak-password"
        ? "Password is too weak. Use at least 6 characters."
        : err.code === "auth/invalid-email"
        ? "Please enter a valid email address."
        : err.message || "Failed to create account. Please try again.";
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col lg:flex-row" data-name="Sign up">
      {/* Form Container */}
      <div className="w-full lg:w-[45%] px-4 sm:px-6 lg:px-12 py-8 lg:py-16 flex items-center justify-center lg:justify-start">
        <div className="w-full max-w-[404px]">
          {/* Title */}
          {!success && (
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-12 mt-4 sm:mt-8">
              Get Started Now
            </h1>
          )}
          
          {success ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-6">
                <svg className="w-16 h-16 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black mb-3">Account Created Successfully! 🎉</h2>
              <p className="text-gray-600 mb-6">
                Your account has been created with the email<br />
                <span className="font-semibold text-black">{formData.email}</span>
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Redirecting to login page in a moment...
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-[#3a5b22] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#3a5b22] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-[#3a5b22] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-[10px] p-3">
                    <p className="text-sm font-medium text-red-700">{error}</p>
                  </div>
                )}

                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-black">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full h-10 rounded-[10px] border border-[#d9d9d9] px-3 py-2 text-sm font-medium placeholder:text-[#d9d9d9] focus:outline-none focus:border-[#3a5b22] focus:ring-1 focus:ring-[#3a5b22] transition-colors"
                    required
                  />
                </div>

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

                {/* Terms Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="w-4 h-4 rounded-[2px] accent-[#3a5b22] cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-xs sm:text-sm font-medium text-black cursor-pointer">
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={() => window.open('/terms-and-policy', '_blank')}
                      className="text-[#0f3dde] underline hover:no-underline bg-none border-0 p-0 cursor-pointer"
                    >
                      terms & policy
                    </button>
                  </label>
                </div>

                {/* Signup Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-10 bg-[#3a5b22] rounded-[10px] border border-[#3a5b22] hover:bg-[#2d4619] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer font-bold text-sm text-white mt-8"
                >
                  {isLoading ? "Signing Up..." : "Signup"}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 my-8">
                <div className="flex-1 h-px bg-[#F5F5F5]"></div>
                <span className="text-sm font-medium text-black">Or</span>
                <div className="flex-1 h-px bg-[#F5F5F5]"></div>
              </div>

              {/* Sign In Link */}
              <p className="text-center text-sm font-medium text-black mt-6">
                Have an account?{" "}
                <button
                  type="button"
                  onClick={handleSignInClick}
                  className="text-[#0f3dde] hover:underline cursor-pointer bg-transparent border-0 p-0"
                >
                  Sign In
                </button>
              </p>
            </>
          )}
        </div>
      </div>

      {/* Hero Image - Hidden on Mobile */}
      <div className="hidden lg:flex w-full lg:w-[55%] items-center justify-center overflow-hidden rounded-bl-[45px] rounded-tl-[45px] bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9]">
        <img
          alt="Decorative plant image"
          className="w-full h-full object-cover"
          src="https://via.placeholder.com/800x1000/c8e6c9/2d5016?text=Campus+Hub"
          onError={(e) => {
            // Fallback: hide image and show gradient
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
}
