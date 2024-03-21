import { Form, redirect, Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import BottomBar from "./bottombar";

export default function Body(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed left-2 top-2 h-[76px] w-14 rounded-2xl bg-[#cececf] sm:hidden dark:bg-[#272727] "
      >
        <span className="material-symbols-outlined text-3xl text-team">
          menu
        </span>
      </button>
      <div className="flex min-h-screen space-x-2 bg-white py-2 font-Monda text-black dark:bg-black dark:text-white">
        <SideBar logo={props.mate ? "mate" : "ftc"} sidebarOpen={sidebarOpen} />
        <div className="min-h-full w-full space-y-2">
          <TopBar name={document.title} sub={props.sub} />
          <article className="mr-2 rounded-2xl bg-[#e6e6e6] px-3 py-2 dark:bg-[#161616]">
            {props.children}
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}
