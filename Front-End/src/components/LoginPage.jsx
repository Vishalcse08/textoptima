import React, { useState } from "react";
import { Sparkles } from "lucide-react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="lg:grid lg:grid-cols-2 min-h-screen">

      {/* LEFT SECTION */}
      <div className="
        hidden lg:flex flex-col justify-between relative overflow-hidden
        bg-[radial-gradient(circle_at_30%_30%,#5A9BFF,#2762E7,#1C47C8)]
        text-white
      ">

        {/* Background glows */}
        <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-400/30 rounded-full blur-3xl"></div>

        {/* Logo */}
        <div className="flex items-center gap-3 mt-10 ml-12 z-10">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute w-12 h-12 bg-white/40 blur-xl rounded-full"></div>
            <Sparkles className="relative w-6 h-6" />
          </div>
          <h1 className="text-2xl font-semibold tracking-wide">
            TextOptima
          </h1>
        </div>

        {/* Hero Content (Bottom) */}
        <div className="flex flex-col gap-6 mb-16 ml-12 max-w-[520px] z-10">
          <span className="uppercase text-xs tracking-widest text-white/80">
            AI Writing Assistant
          </span>

          <h1 className="text-[42px] font-bold leading-tight">
            Enhance Your Writing <br />
            with <span className="text-white/90">AI-Powered Precision</span>
          </h1>

          <p className="text-base text-white/85 leading-relaxed">
            Write smarter and faster with <span className="font-medium">TextOptima</span>.
            Perfect grammar, tone, and clarity — every time.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="
        flex flex-col justify-center items-center
        bg-white px-6 lg:px-28
       h-[100vh]">

        {/* Heading */}
        <h1 className="text-3xl lg:text-4xl font-bold">
          {isLogin ? "Welcome Back " : "Create Account "}
        </h1>

        <p className="text-gray-500 mt-2 text-sm lg:text-base">
          {isLogin
            ? "Enter your credentials to access your account."
            : "Fill in the details to create your account."
          }
        </p>

        {/* Form */}
        <div className="mt-10 w-full max-w-md flex flex-col gap-5">

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="
                h-11 px-4 rounded-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition
              "
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="
                h-11 px-4 rounded-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition
              "
            />
          </div>

          {/* Remember / Forgot */}
          {isLogin && (
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="text-blue-600 cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>
          )}

          {/* Button */}
          <button className="
            h-11 rounded-lg text-white font-medium
            bg-gradient-to-r from-blue-500 to-blue-700
            hover:shadow-lg hover:scale-[1.01]
            transition
          ">
            {isLogin ? "Login" : "Sign Up"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <div className="flex-1 h-px bg-gray-300"></div>
            OR
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google */}
          <div className="
            flex items-center justify-center gap-3
            border border-gray-300 rounded-lg h-11
            cursor-pointer hover:bg-gray-100 transition
          ">
            <img
              src="./src/assets/Google_Favicon_2025.svg.png"
              className="w-5 h-5"
              alt="Google"
            />
            <span className="font-medium">Continue with Google</span>
          </div>

          {/* Toggle */}
          <p className="text-sm text-center mt-4">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <span
                  className="font-semibold text-blue-600 cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="font-semibold text-blue-600 cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
