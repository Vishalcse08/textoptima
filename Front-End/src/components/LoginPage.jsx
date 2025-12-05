import React from 'react'

const LoginPage = () => {
  return (

    <>
      <div className='grid grid-cols-2'>
        <div className="bg-[#0A0E14] w-[100%] h-[100vh] flex  text-white ">

          <div>
            <h1 className='text-[20px] ml-[30px] mt-[30px] font-bold'>TextOptima</h1>
          </div>

        </div>
        <div className="bg-[#1A22332] w-[100%] h-[100vh] flex flex-col justify-center items-center ">
          <h1 className='md:text-[45px] font-bold '>Welcome Back </h1>
          <p>Enter your credentials toaccess your account.</p>
          <div className='flex flex-col'>
            <h1>Email</h1>
            <input type="email" placeholder='example@gmail.com' />
          </div>
          <div className='flex flex-col'>
            <h1>Password</h1>
            <input type="password" placeholder='Enter you password ' />
          </div>

          <div className=''>
            <h3>Forgot Password?</h3>
          </div>
          <div className='flex gap-4 mt-4'>
            <button className='text-center'>
              Login
            </button>
            <button>
              Sign Up
            </button>
          </div>
         

          <div>

          </div>
        </div>

      </div>

    </>

  )
}

export default LoginPage