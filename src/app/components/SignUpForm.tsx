import { useState } from "react";
import svgPaths from "../../imports/svg-b3x87pu8sf";
import imgChrisLee70L1TDai6RMUnsplash1 from "figma:asset/c230ffba520fab60716f712257d7f6a7fc48a42f.png";

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
        <g clipPath="url(#clip0_1_175)" id="icons8-apple-logo 1">
          <g id="Vector">
            <path d={svgPaths.p91f2700} fill="var(--fill-0, black)" />
            <path d={svgPaths.p129e6660} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3b588600} fill="var(--fill-0, black)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_175">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please agree to the terms & policy");
      return;
    }
    console.log("Form submitted:", formData);
    // Handle signup logic here
  };

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google");
    // Handle Google sign-in logic
  };

  const handleAppleSignIn = () => {
    console.log("Sign in with Apple");
    // Handle Apple sign-in logic
  };

  const handleSignInClick = () => {
    console.log("Navigate to sign in");
    // Handle navigation to sign in page
  };

  return (
    <div className="bg-white relative size-full" data-name="Sign up">
      <div className="absolute content-stretch flex h-[638px] items-start left-[calc(10%+21.4px)] pb-[64px] top-[202px]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          {/* Title */}
          <div className="col-1 content-stretch flex h-[52.528px] items-start ml-0 mt-0 relative row-1">
            <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black">
              Get Started Now
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contents">
            {/* Name Field */}
            <div className="col-1 content-stretch flex flex-col h-[58px] items-start ml-0 mt-[110.53px] relative row-1 w-[404px]">
              <div className="content-stretch flex items-start relative shrink-0">
                <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
                  Name
                </p>
              </div>
              <div className="h-[32px] relative rounded-[10px] shrink-0 w-[404px]">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="absolute inset-0 w-full h-full rounded-[10px] border border-[#d9d9d9] pl-[10px] py-[10px] font-['Poppins:Medium',sans-serif] text-[10px] placeholder:text-[#d9d9d9] focus:outline-none focus:border-[#3a5b22]"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="col-1 content-stretch flex flex-col h-[58px] items-start ml-0 mt-[188.23px] relative row-1 w-[404px]">
              <div className="content-stretch flex items-start relative shrink-0">
                <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
                  Email address
                </p>
              </div>
              <div className="h-[32px] relative rounded-[10px] shrink-0 w-[404px]">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="absolute inset-0 w-full h-full rounded-[10px] border border-[#d9d9d9] pl-[10px] py-[10px] font-['Poppins:Medium',sans-serif] text-[10px] placeholder:text-[#d9d9d9] focus:outline-none focus:border-[#3a5b22]"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="col-1 content-stretch flex flex-col h-[58px] items-start ml-0 mt-[265.92px] relative row-1 w-[404px]">
              <div className="content-stretch flex items-start relative shrink-0">
                <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
                  Password
                </p>
              </div>
              <div className="h-[32px] relative rounded-[10px] shrink-0 w-[404px]">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="absolute inset-0 w-full h-full rounded-[10px] border border-[#d9d9d9] pl-[10px] py-[10px] font-['Poppins:Medium',sans-serif] text-[10px] placeholder:text-[#d9d9d9] focus:outline-none focus:border-[#3a5b22]"
                  required
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[343.62px] place-items-start relative row-1">
              <label className="col-1 font-['Poppins:Medium',sans-serif] h-[15.321px] ml-[15px] mt-0 not-italic relative row-1 text-[9px] text-black w-[128px] whitespace-pre-wrap cursor-pointer">
                <span className="leading-[normal]">{`I agree to the `}</span>
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] underline">{`terms & policy`}</span>
              </label>
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="col-1 h-[9.849px] ml-0 mt-[2.19px] rounded-[2px] row-1 w-[9px] cursor-pointer accent-[#3a5b22]"
              />
            </div>

            {/* Signup Button */}
            <div className="bg-[#edf2f7] col-1 h-[35.019px] ml-0 mt-[388.49px] relative row-1 w-[404px]">
              <button
                type="submit"
                className="absolute inset-0 bg-[#3a5b22] rounded-[10px] border border-[#3a5b22] hover:bg-[#2d4619] transition-colors cursor-pointer"
              >
                <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic text-[13px] text-white">
                  Signup
                </p>
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="col-1 h-[15.321px] ml-[3px] mt-[482.6px] relative row-1 w-[400px]">
            <div className="absolute h-0 left-0 top-[9px] w-[400px]">
              <div className="absolute inset-[-2px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 2">
                  <line id="Line 2" stroke="var(--stroke-0, #F5F5F5)" strokeWidth="2" x2="400" y1="1" y2="1" />
                </svg>
              </div>
            </div>
            <div className="absolute bg-white content-stretch flex items-center justify-center left-[190px] overflow-clip px-[3px] top-0 w-[20px]">
              <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black">
                Or
              </p>
            </div>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="col-1 ml-0 mt-[560px] relative rounded-[10px] row-1 border border-[#d9d9d9] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[4px] relative rounded-[inherit]">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                <Icons8Google />
                <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black">
                  Sign in with Google
                </p>
              </div>
            </div>
          </button>

          {/* Apple Sign In */}
          <button
            type="button"
            onClick={handleAppleSignIn}
            className="col-1 ml-[213px] mt-[558px] relative rounded-[10px] row-1 w-[190px] border border-[#d9d9d9] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[20px] py-[4px] relative rounded-[inherit] w-full">
              <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                <Icons8AppleLogo />
                <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black">
                  Sign in with Apple
                </p>
              </div>
            </div>
          </button>

          {/* Sign In Link */}
          <div className="col-1 content-stretch flex flex-col h-[22.981px] items-start ml-[113px] mt-[615.02px] relative row-1">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <p className="col-1 font-['Poppins:Medium',sans-serif] ml-0 mt-0 not-italic relative row-1 text-[0px] text-[14px] text-black">
                <span className="leading-[normal]">{`Have an account?  `}</span>
                <button
                  type="button"
                  onClick={handleSignInClick}
                  className="leading-[normal] text-[#0f3dde] hover:underline cursor-pointer bg-transparent border-0 p-0 font-['Poppins:Medium',sans-serif] text-[14px]"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div
        className="absolute h-[1042px] left-[calc(40%+139.6px)] rounded-bl-[45px] rounded-tl-[45px] top-0 w-[781.5px]"
        data-name="chris-lee-70l1tDAI6rM-unsplash 1"
      >
        <img
          alt="Decorative monstera plant"
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[45px] rounded-tl-[45px] size-full"
          src={imgChrisLee70L1TDai6RMUnsplash1}
        />
      </div>
    </div>
  );
}
