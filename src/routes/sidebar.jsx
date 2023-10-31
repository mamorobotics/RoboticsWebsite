import { Form, redirect, Link } from "react-router-dom";
import React, { useState } from "react";
import ftc_logo from '/assets/ftc-logo.png';
import mate_logo from '/assets/mate-logo.png';

export default function SideBar({logo}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
        <div className={sidebarOpen ? "sidebar" : "sidebar hidden"}>
          <img src={logo == 'ftc' ? ftc_logo : mate_logo} alt="MHS Robotics Logo" width="150px" height="174.163px"></img>
          <h2>MHS Robotics</h2>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/the-team">The Team</Link></li>
              <li><Link to="/outreach">Outreach</Link></li>
              <li><Link to="/ftc">FTC</Link></li>
              <li><Link to="/mate">MATE</Link></li>
              <li><button className="lightmode-button" onClick={() => {
                var body = document.getElementById("root");
                if (localStorage.getItem('darkmode') == "dark") { localStorage.setItem('darkmode', "light"); } else { localStorage.setItem('darkmode', "dark"); }
                document.getElementById("root").setAttribute("class", localStorage.getItem('darkmode'));
              }}><span className="material-symbols-outlined">contrast</span></button></li>
          </ul>
        </div>
        
        <button className="menu-button" style={{background: sidebarOpen ? "var(--background-color)" : "var(--accent-color)"}} onClick={() => {setSidebarOpen(!sidebarOpen); console.log(sidebarOpen)}}><span className="material-symbols-outlined">menu</span></button>
    </>
  );
}