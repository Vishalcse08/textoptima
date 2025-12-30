import React from 'react'
import { Sparkles, PencilIcon } from "lucide-react";
const SideNavbar = () => {
  return (
    <div className='w-[100%]'>
        <div className='lg:w-[30%] md:w-[40%] border-[1px]  h-[100vh]'>
            <div>
                <div className='flex items-center gap-3   z-10 '>
                     <Sparkles className=" w-7 h-7 text-blue-600" />
                    <h1 className='text-[25px] font-semibold'>Text <span className="text-blue-600 text-[28px] font-bold">Optima</span></h1>
                </div>
                <div className='flex flex-col gap-[20px] mt-[50px] ml-[10px]'>
                    <div className='flex gap-3'>
                      <PencilIcon />
                      <h1>Smart Rewritter</h1>
                    </div>
                    <div className='flex gap-3'>
                      <PencilIcon />
                      <h1>Grammer Check</h1>
                    </div>
                    <div className='flex gap-3'>
                      <PencilIcon />
                      <h1>Email Generator</h1>
                    </div>
                    <div className='flex gap-3'>
                      <PencilIcon />
                      <h1>Quick Reply</h1>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SideNavbar