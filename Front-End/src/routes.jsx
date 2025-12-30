import React from 'react'
import LoginPage from './components/LoginPage'
import Smarttext from './components/Smarttext'
import SideNavbar from './components/SideNavbar'
import DashBoard from './components/DashBoard'
const routes = () => {
  return (
    <div>
        {/* <Smarttext  path="/"/> */}
        {/* <SideNavbar path="/"/> */}
        {/* <LoginPage path="/" /> */}
        <DashBoard path="/" />
    </div>
  )
}

export default routes