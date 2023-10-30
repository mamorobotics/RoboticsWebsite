import { Form, redirect, Link } from "react-router-dom";
import React, { useState } from "react";

export default function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <>
        <div className={sidebarOpen ? "sidebar" : "sidebar hidden"}>
          <img src="src/assets/logo.png" alt="MHS Robotics Logo" width="150px" height="174.163px"></img>
          <h2>MHS Robotics</h2>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/the-team">The Team</Link></li>
              <li><Link to="/outreach">Outreach</Link></li>
              <li><Link to="/ftc">FTC</Link></li>
              <li><Link to="/mate">MATE</Link></li>
          </ul>
        </div>
        <button className="menu-button" style={{background: sidebarOpen ? "var(--background-color)" : "var(--accent-color)"}} onClick={() => {setSidebarOpen(!sidebarOpen); console.log(sidebarOpen)}}><span className="material-symbols-outlined">menu</span></button>
    </>
  );
}