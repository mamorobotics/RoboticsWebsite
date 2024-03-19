import { Form, redirect, Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <>
        <div className="ml-auto bg-[#272727] rounded-l-2xl w-fit">
            <ul className="flex flex-nowrap space-x-3 py-2 px-6">
                <li className="font-semibold">Created by the MHS Robotics Team</li>
                <li><a href="https://www.mamkschools.org/">School</a></li>
                <li><a href="https://www.instagram.com/mamk_robotics/">Instagram</a></li>
                <li><a href="https://twitter.com/mamkrobotics">Twitter</a></li>
                <li><a href="https://github.com/mamorobotics">Github</a></li>
            </ul>
        </div>
    </>
  );
}