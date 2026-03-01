import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import svgPaths from "../../imports/svg-1dndbxuzvz";
import imgChrisLee70L1TDai6RMUnsplash2 from "figma:asset/c230ffba520fab60716f712257d7f6a7fc48a42f.png";

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

function Icons8Google() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icons8-google 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icons8-google 1">
          <path d={svgPaths.p257b0b00} fill="var(--fill-0, #FFC107)" id="Vector" />
          <path d={svgPaths.p3347ed00} fill="var(--fill-0, #FF3D00)" id="Vector_2" />
          <path d={svgPaths.p19b71500} fill="var(--fill-0, #4CAF50)" id="Vector_3" />
          <path d={svgPaths.p3dad0040} fill="var(--fill-0, #1976D2)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Icons8AppleLogo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icons8-apple-logo 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_614)" id="icons8-apple-logo 1">
          <g id="Vector">
            <path d={svgPaths.p91f2700} fill="var(--fill-0, black)" />
            <path d={svgPaths.p129e6660} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3b588600} fill="var(--fill-0, black)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_614">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MaterialSymbolsQuestionMarkRounded() {
  return (
    <div className="relative size-[10px]" data-name="material-symbols:question-mark-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="material-symbols:question-mark-rounded">
          <path d={svgPaths.p22586df0} fill="var(--fill-0, #0C2A92)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    defaultValues: {
      rememberMe: false,
    }
  });

  const onSubmit = (data: LoginFormData) => {
    // Mock authentication
    if (data.email && data.password) {
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      toast.error("Please enter valid credentials");
    }
  };

  const handleGoogleLogin = () => {
    toast.info("Google login would be implemented here");
  };

  const handleAppleLogin = () => {
    toast.info("Apple login would be implemented here");
  };

  const handleForgotPassword = () => {
    toast.info("Password reset link would be sent to your email");
  };

  return (
    <div className="bg-white relative size-full overflow-auto" data-name="Log in">
      <div className="absolute content-stretch flex h-[583px] items-start left-[calc(10%+21.4px)] top-[230px]">
        <form onSubmit={handleSubmit(onSubmit)} className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          {/* Header */}
          <div className="col-1 content-stretch flex h-[53.101px] items-start ml-0 mt-0 relative row-1">
            <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black">Welcome back!</p>
          </div>

          {/* Subtitle */}
          <p className="col-1 font-['Poppins:Medium',sans-serif] h-[26.55px] leading-[normal] ml-0 mt-[53.1px] not-italic relative row-1 text-[16px] text-black w-[372px] whitespace-pre-wrap">Enter your Credentials to access your account</p>

          {/* Email Field */}
          <div className="col-1 content-stretch flex flex-col h-[58.632px] items-start ml-0 mt-[139.39px] relative row-1 w-[404px]">
            <div className="content-stretch flex items-start relative shrink-0">
              <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">Email address</p>
            </div>
            <div className="h-[32px] relative rounded-[10px] shrink-0 w-[404px]">
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full h-full px-[10px] py-[10px] rounded-[10px] border border-[#d9d9d9] font-['Poppins:Medium',sans-serif] text-[10px] focus:outline-none focus:border-[#3a5b22]"
              />
            </div>
            {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="col-1 content-stretch flex flex-col h-[58.632px] items-start ml-0 mt-[217.93px] relative row-1 w-[404px]">
            <div className="content-stretch flex items-start relative shrink-0">
              <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">Password</p>
            </div>
            <div className="h-[32px] relative rounded-[10px] shrink-0 w-[404px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                className="w-full h-full px-[10px] py-[10px] rounded-[10px] border border-[#d9d9d9] font-['Poppins:Medium',sans-serif] text-[10px] focus:outline-none focus:border-[#3a5b22]"
              />
            </div>
            {errors.password && <p className="text-red-500 text-[10px] mt-1">{errors.password.message}</p>}
          </div>

          {/* Remember Me Checkbox */}
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[296.48px] place-items-start relative row-1">
            <label className="col-1 font-['Poppins:Medium',sans-serif] h-[15.488px] leading-[normal] ml-[15px] mt-0 not-italic relative row-1 text-[9px] text-black w-[104px] whitespace-pre-wrap cursor-pointer">
              Remember for 30 days
            </label>
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="col-1 h-[9.956px] ml-0 mt-[2.21px] rounded-[2px] row-1 w-[9px] cursor-pointer accent-[#3a5b22]"
            />
          </div>

          {/* Forgot Password */}
          <button
            type="button"
            onClick={handleForgotPassword}
            className="col-1 font-['Poppins:Medium',sans-serif] h-[16.594px] leading-[normal] ml-[312px] mt-[217px] not-italic relative row-1 text-[#0c2a92] text-[10px] w-[83px] whitespace-pre-wrap cursor-pointer hover:underline"
          >
            forgot password
          </button>

          <div className="col-1 ml-[394px] mt-[219.07px] relative row-1 size-[10px]">
            <MaterialSymbolsQuestionMarkRounded />
          </div>

          {/* Login Button */}
          <div className="col-1 h-[35.4px] ml-0 mt-[331.88px] relative row-1 w-[404px]">
            <button
              type="submit"
              className="w-full h-full bg-[#3a5b22] rounded-[10px] border border-[#3a5b22] font-['Poppins:Bold',sans-serif] text-[13px] text-white cursor-pointer hover:bg-[#2d4619] transition-colors"
            >
              Login
            </button>
          </div>

          {/* Social Login Buttons */}
          <div className="col-1 content-stretch flex gap-[23px] items-center ml-0 mt-[505px] relative row-1">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="relative rounded-[10px] shrink-0 border border-[#d9d9d9] px-[20px] py-[4px] cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="content-stretch flex gap-[10px] items-center">
                <Icons8Google />
                <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic text-[12px] text-black">Sign in with Google</p>
              </div>
            </button>

            <button
              type="button"
              onClick={handleAppleLogin}
              className="relative rounded-[10px] shrink-0 w-[190px] border border-[#d9d9d9] px-[20px] py-[4px] cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="content-stretch flex gap-[10px] items-center justify-center">
                <Icons8AppleLogo />
                <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic text-[12px] text-black">Sign in with Apple</p>
              </div>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[93px] mt-[559.77px] place-items-start relative row-1">
            <p className="col-1 font-['Poppins:Medium',sans-serif] h-[23.231px] ml-0 mt-0 not-italic relative row-1 text-[0px] text-[14px] text-black w-[229px] whitespace-pre-wrap">
              <span className="leading-[normal]">Don't h</span>
              <span className="leading-[normal]">{`ave an account?  `}</span>
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="leading-[normal] text-[#0f3dde] cursor-pointer hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>

      {/* Divider */}
      <div className="absolute h-[14px] left-[calc(10%+21.4px)] top-[632px] w-[400px]">
        <div className="absolute h-0 left-0 top-[9px] w-[400px]">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 2">
              <line id="Line 2" stroke="var(--stroke-0, #F5F5F5)" strokeWidth="2" x2="400" y1="1" y2="1" />
            </svg>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex items-center justify-center left-[191px] overflow-clip px-[3px] top-0 w-[20px]">
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black">Or</p>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute h-[1042px] left-[calc(40%+139.6px)] rounded-bl-[45px] rounded-tl-[45px] top-0 w-[781.5px]" data-name="chris-lee-70l1tDAI6rM-unsplash 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[45px] rounded-tl-[45px] size-full" src={imgChrisLee70L1TDai6RMUnsplash2} />
      </div>
    </div>
  );
}
