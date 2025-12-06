import React, { useState } from 'react'

const LoginPage = () => {

  const [isLogin, setIsLogin] = useState(true); 

  return (
    <>
      <div className='grid grid-cols-2'>
        
        {/* Left Section */}
        <div className="bg-[#0A0E14] w-[100%] flex text-white ">
          <h1 className='text-[30px] mt-[30px] ml-[20px] font-bold'>TextOptima</h1>
        </div>

        {/* Right Section */}
        <div className="bg-[#111C22] w-[100%] h-[100vh] flex flex-col items-center p-[120px] text-white ">

          {/* Dynamic heading */}
          <h1 className='md:text-[45px] font-bold '>
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p className='text-[#7E8A96] tracking-[0.5px]'>
            {isLogin
              ? "Enter your credentials to access your account."
              : "Fill the details to sign up."
            }
          </p>

          {/* Email */}
          <div className='flex flex-col gap-2 mt-10'>
            <h1 className='font-semibold'>Email</h1>
            <input
              type="email"
              placeholder='example@gmail.com'
              className='placeholder:text-[#435061] pl-[10px] w-[400px] border-[2px] border-[#2C3848] focus:outline-none h-[40px] bg-[#1E293B] rounded-[8px]'
            />
          </div>

          {/* Password */}
          <div className='flex flex-col gap-2 mt-4'>
            <h1 className='font-semibold'>Password</h1>
            <input
              type="password"
              placeholder='Enter your password'
              className='placeholder:text-[#435061] pl-[10px] w-[400px] border-[2px] border-[#2C3848] focus:outline-none h-[40px] bg-[#1E293B] rounded-[8px]'
            />
          </div>

          {/* Hide this part when Signup */}
          {isLogin && (
            <div className='mt-4 flex gap-25 font-semibold'>
              <div className='flex gap-1'>
                <input type="checkbox" className='mr-2' />
                <h1>Remember Me</h1>
              </div>
              <div>
                <h3 className='text-[#16A1E2] cursor-pointer'>Forgot Password?</h3>
              </div>
            </div>
          )}

          {/* Button */}
          <div className='flex gap-4 mt-4'>
            <button className='b-1 rounded-md p-2 bg-[#14A4EB] text-center text-white cursor-pointer w-[400px]'>
              {isLogin ? "Login " : "Sign Up"}
            </button>
          </div>

          {/* Toggle Login/Signup */}
          <div className='mt-4 flex'>
            <h1 className='mt-4'>
              {isLogin ? (
                <>Don't have an account? <span
                  className='text-[#16A1E2] font-semibold cursor-pointer'
                  onClick={() => setIsLogin(false)}
                >Sign Up</span></>
              ) : (
                <>Already have an account? <span
                  className='text-[#16A1E2] font-semibold cursor-pointer'
                  onClick={() => setIsLogin(true)}
                >Login</span></>
              )}
            </h1>
          </div>

        </div>

      </div>
    </>
  )
}

export default LoginPage
