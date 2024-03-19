import { Form, redirect, Link } from "react-router-dom";

export default function TopBar({name, sub}) {
  return (
    <>
        <div className="bg-[#272727] rounded-l-2xl py-2 pl-4 w-full">
            <h1 className="font-bold text-3xl">{name}</h1>
            <h2 className="font-medium text-gray-400">{sub}</h2>
        </div>
    </>
  );
}