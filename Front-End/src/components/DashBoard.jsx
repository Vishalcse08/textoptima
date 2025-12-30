import React from 'react'
import Navbar from './Navbar'
import SideNavbar from './SideNavbar'
const DashBoard = () => {
  return (
    <div className='flex items-start'>
        
        <SideNavbar/>
        <Navbar/>
    </div>
  )
}

export default DashBoard