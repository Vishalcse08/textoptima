import React from 'react'
import { Search } from "lucide-react";
const Navbar = () => {
  return (
    <>
   
      <div className='w-[100%]'>
        
        <div className='pt-[10px] flex justify-between items-center lg:w-[70%] md:w-[60%]'>


          <div className='flex items-center gap-2 border  rounded-md px-2 py-1 w-[200px] md:w-80 lg:w-100'>
            <Search className='w-[20px]' />
            <input type="text" placeholder=' Search' className='focus:outline-none ' />
          </div>
          <div className='flex items-center gap-1'>
            <div className='w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center text-white font-bold'>
              <h1>V</h1>
            </div>
            <h1 className='text-[20px] font-medium'>Vishal</h1>
          </div>
        </div>

      </div>

    </>

  )
}

export default Navbar