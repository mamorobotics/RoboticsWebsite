import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import BottomBar from "./bottombar";

export default function Error() {
  document.title = "Error";
  return (
    <>
      <div className="bg-black dark:bg-black flex text-black dark:text-white py-2 space-x-2 h-screen">
        <SideBar logo="ftc"/>
        <div className="space-y-2">
          <TopBar name="You shouldn't be here..." sub="Im sorry, but this page doesn't exist."/>
          <article className="mr-2 p-2 bg-[#272727] rounded-2xl">
            
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}