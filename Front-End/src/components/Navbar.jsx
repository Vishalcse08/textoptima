import React from "react";
import { Search, Menu } from "lucide-react";

const Navbar = ({ onMenuClick }) => {
  return (
    <header className="w-full border-b px-4 md:px-6 py-3
      flex justify-between items-center bg-white">

      {/* Left */}
      <div className="flex items-center gap-3">
        
        {/* ☰ Menu (mobile only) */}
        <button
          className="md:hidden"
          onClick={onMenuClick}   // ✅ THIS IS REQUIRED
          type="button"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Search */}
        <div className="flex items-center gap-2 border rounded-md px-3 py-1 w-[200px] md:w-[300px]">
          <Search className="w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full focus:outline-none"
          />
        </div>
      </div>

      {/* Profile */}
      <div className="flex  items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-full
          flex items-center justify-center text-white font-bold">
          V
        </div>
        <h1 className="hidden sm:block text-lg font-medium">
          Vishal
        </h1>
      </div>
    </header>
  );
};

export default Navbar;
