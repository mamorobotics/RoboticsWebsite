import { Form, redirect, Link } from "react-router-dom";
import React, { useState } from "react";
import ftc_logo from "/assets/ftc-logo.png";
import mate_logo from "/assets/mate-logo.png";

export default function SideBar({ logo }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="sticky top-2 max-h-[calc(100vh-1rem)] w-52 shrink-0 rounded-r-2xl bg-[#272727]">
        <img
          src={logo == "ftc" ? ftc_logo : mate_logo}
          alt="MHS Robotics Logo"
          width="150px"
          height="174.163px"
          className="mx-auto my-2"
        ></img>
        <h2 className="text-center text-2xl font-semibold text-team">
          MHS Robotics
        </h2>
        <ul className="space-y-2 pl-2 pt-2 text-lg font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/the-team">The Team</Link>
          </li>
          <li>
            <Link to="/outreach">Outreach</Link>
          </li>
          <li>
            <Link to="/ftc">FTC</Link>
          </li>
          <li>
            <Link to="/mate">MATE</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
