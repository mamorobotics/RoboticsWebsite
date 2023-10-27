import { Form, redirect, Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
        <div class="sidebar">
          <img src="src/assets/logo.png"></img>
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
    </>
  );
}