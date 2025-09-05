import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaYoutube, FaTwitter, FaFacebook, FaHome } from "react-icons/fa";
import { X, Sidebar, LogOut, DoorOpen, Menu, AlignLeft } from "lucide-react";
import { useUser } from "../Contexts/UserContext";
import { CircularProgress } from "@mui/material";
import ModeToggle from "../Components/ModeToggle";
import { Outlet } from "react-router-dom";

const Aside = () => {
  const ASIDEITEMS = [
    { name: "DashBoard", icon: FaHome, path: "/app/dashboard" },
    { name: "Youtube", icon: FaYoutube, path: "/app/youtube" },
    { name: "Twitter", icon: FaTwitter, path: "/app/twitter" },
    { name: "FaceBook", icon: FaFacebook, path: "/app/facebook" },
  ];

  const [asideOpen, setAsideOpen] = useState(false);
  const { user, handleLogout, isLoading } = useUser();
  const location = useLocation();

  return (
    <>
      {/* Mobile Toggle Button - Always Visible */}
      <button
        onClick={() => setAsideOpen(!asideOpen)}
        className="block md:hidden fixed top-4 left-4 z-50 p-4  rounded-full shadow-lg"
      >
        {asideOpen ? (
          <X size={35} className=" hidden stroke-[1px]" />
        ) : (
          <Sidebar size={35} strokeWidth={2} />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          asideOpen ? "w-[17rem]" : "w-0 hidden md:block md:w-20 md:p-4 h-full"
        } transition-all duration-300 md:block p-2 backdrop-blur-2xl border border-gray-400 m-1 fixed z-40 h-[98%] rounded-3xl flex flex-col items-start justify-start gap-11`}
      >
        {/* Header */}
        <div className="flex justify-between items-center w-full gap-5 p-2 mb-1">
          <h1
            className={`text-3xl font-sans whitespace-nowrap ${
              asideOpen ? "block" : "hidden"
            }`}
          >
            Socially
          </h1>
          <span
            className=" block rounded-full cursor-pointer mb-3"
            onClick={() => setAsideOpen(!asideOpen)}
          >
            {asideOpen ? (
              <X size={30} />
            ) : (
              <AlignLeft size={35} className=" stroke-[1px] hover:opacity-40" />
            )}
          </span>
        </div>

        {/* User Info */}
        <div
          className={`flex gap-2 items-center mb-2 rounded-lg ${
            asideOpen ? "p-1" : "p-0 mb-4"
          }`}
        >
          <img
            src={user?.picture}
            alt={user?.name || "User avatar"}
            className="h-11 w-11 ml-0.5 rounded-full object-cover ring-1 ring-gray-500"
          />
          <p className={`${asideOpen ? "block" : "hidden"}`}>
            {user?.name || "Username"}
          </p>
        </div>
        {/* Navigation Items */}
        <nav
          className={`flex flex-col gap-5 border border-gray-700 rounded-3xl ${
            asideOpen ? "p-2" : "border-none gap-5"
          }`}
        >
          {ASIDEITEMS.map(({ name, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-4 p-2 rounded-lg hover:-translate-y-1 transition-all duration-200 ${
                location.pathname === path ? "bg-inherit" : ""
              }`}
            >
              <Icon size={30} />
              <p className={`${asideOpen ? "block" : "hidden"}`}>{name}</p>
            </Link>
          ))}
          <div className="flex gap-1 items-center">
            <span id="icon">
              <ModeToggle />
            </span>
            <label htmlFor="icon" className={`${asideOpen ? "" : "hidden"}`}>
              Change Theme
            </label>
          </div>
        </nav>
        <button
          onClick={handleLogout}
          className={`px-8 py-2 bg-red-500 hover:bg-red-400 rounded-lg mt-3 flex items-center gap-2 text-white ${
            asideOpen ? "block" : "hidden"
          }`}
        >
          <LogOut size={20} />
          {isLoading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            "Log Out"
          )}
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default Aside;
