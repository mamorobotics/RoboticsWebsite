import { Form, redirect, Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <>
      <div className="ml-auto w-fit rounded-l-2xl bg-[rgb(39,39,39)] px-4 py-2">
        <p className="pr-3 font-semibold">Created by the MHS Robotics Team</p>
        <ul className="flex space-x-3">
          <li>
            <a href="https://www.mamkschools.org/">School</a>
          </li>
          <li>
            <a href="https://www.instagram.com/mamk_robotics/">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/mamkrobotics">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/mamorobotics">Github</a>
          </li>
        </ul>
      </div>
    </>
  );
}
