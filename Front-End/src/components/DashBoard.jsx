import React, { useState } from "react";
import Navbar from "./Navbar";
import SideNavbar from "./SideNavbar";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <SideNavbar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex flex-col flex-1">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
