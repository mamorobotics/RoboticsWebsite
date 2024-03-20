import { Form, redirect, Link } from "react-router-dom";

export default function TopBar({ name, sub }) {
  return (
    <>
      <div className="flex w-full">
        <button className="mr-2 w-14 rounded-2xl bg-[#272727] text-3xl text-team sm:hidden">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
        <div className="w-full rounded-l-2xl bg-[#272727] py-2 pl-4">
          <h1 className="text-3xl font-bold">{name}</h1>
          <h2 className="font-medium text-gray-400">{sub}</h2>
        </div>
      </div>
    </>
  );
}
