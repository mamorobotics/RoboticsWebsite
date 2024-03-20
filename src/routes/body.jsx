import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import BottomBar from "./bottombar";

export default function Body(props) {
  return (
    <>
      <div className="flex min-h-screen space-x-2 bg-black py-2 font-Monda text-black dark:bg-black dark:text-white">
        <SideBar logo={props.mate ? "mate" : "ftc"} />
        <div className="min-h-full w-full space-y-2">
          <TopBar name={document.title} sub={props.sub} />
          <article className="mr-4 rounded-2xl bg-[#e6e6e6] px-3 py-2 dark:bg-[#161616]">
            {props.children}
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}
