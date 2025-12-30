import React from "react";
import {
  Sparkles,
  PenLine,
  CheckCircle,
  Mail,
  MessageSquare,
  X
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Smart Rewriter", path: "/", icon: PenLine },
  { name: "Grammar Check", path: "/grammar", icon: CheckCircle },
  { name: "Email Generator", path: "/email", icon: Mail },
  { name: "Quick Reply", path: "/reply", icon: MessageSquare },
];

const SideNavbar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay (mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          w-64 min-h-screen bg-white border-r px-6 py-4
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-blue-600" />
            <h1 className="text-xl font-semibold">
              Text <span className="text-blue-600 font-bold">Optima</span>
            </h1>
          </div>

          <button className="md:hidden" onClick={onClose}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2">
          {menuItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default SideNavbar;
