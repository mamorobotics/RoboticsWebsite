import { Form, redirect, Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <>
        <div class="bottombar">
            <ul>
                <li>Created by the MHS Robotics Team©</li>
                <li><a href="https://www.mamkschools.org/">School</a></li>
                <li><a href="https://www.instagram.com/mamk_robotics/">Instagram</a></li>
                <li><a href="https://github.com/mamorobotics">Github</a></li>
            </ul>
        </div>
    </>
  );
}