import { Form, redirect, Link } from "react-router-dom";

export default function TopBar({ name, sub, setSidebarOpen, sidebarOpen }) {
  return (
    <>
      <div className="rounded-l-2xl bg-[#cececf] py-2 pl-4 max-sm:ml-16 dark:bg-[#272727]">
        <h1 className="text-3xl font-bold">{name}</h1>
        <h2 className="font-medium text-black dark:text-gray-400">{sub}</h2>
      </div>
    </>
  );
}
