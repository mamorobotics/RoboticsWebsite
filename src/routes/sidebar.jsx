import { Form, redirect, Link } from "react-router-dom";
import React from "react";
import ftc_logo from "/assets/ftc-logo.png";
import mate_logo from "/assets/mate-logo.png";

export default function SideBar({ logo, sidebarOpen }) {
  return (
    <>
      <div
        className={
          "sticky top-2 z-10 max-h-[calc(100vh-1rem)] w-52 shrink-0 rounded-r-2xl bg-[#cececf] max-sm:fixed max-sm:top-[calc(76px+1rem)] max-sm:h-[calc(100%-1.5rem-76px)] dark:bg-[#272727] " +
          (sidebarOpen ? "open-sidebar" : "close-sidebar")
        }
      >
        <img
          src={logo == "ftc" ? ftc_logo : mate_logo}
          alt="MHS Robotics Logo"
          width="150px"
          height="174.163px"
          className="mx-auto my-2 landscape:max-lg:hidden"
        ></img>
        <h2 className="text-center text-2xl font-semibold text-team landscape:max-lg:mt-6">
          MHS Robotics
        </h2>
        <ul className="space-y-4 pl-3 pt-6 text-lg font-medium text-black dark:text-gray-400 ">
          <li className="hover:font-bold dark:hover:font-medium dark:hover:text-gray-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:font-bold dark:hover:font-medium dark:hover:text-gray-200">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="hover:font-bold dark:hover:font-medium dark:hover:text-gray-200">
            <Link to="/the-team">The Team</Link>
          </li>
          <li className="hover:font-bold dark:hover:font-medium dark:hover:text-gray-200">
            <Link to="/outreach">Outreach</Link>
          </li>
          <li className="hover:font-bold dark:hover:font-medium dark:hover:text-gray-200">
            <Link to="/ftc">FTC</Link>
          </li>
          <li className="hover:font-bold dark:hover:font-medium dark:hover:text-gray-200">
            <Link to="/mate">MATE</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
