import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import BottomBar from "./bottombar";

export default function MATE() {
  document.title = "MATE";
  return (
    <>
      <div className="bg-black dark:bg-black flex text-black dark:text-white py-2 space-x-2 h-screen">
        <SideBar logo="ftc"/>
        <div className="space-y-2">
          <TopBar name="MATE" sub="MHS Tiger Sharks"/>
          <article className="mr-2 p-2 bg-[#272727] rounded-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A id fugiat voluptatibus nam magnam velit culpa saepe eveniet necessitatibus. Odio deleniti quia recusandae doloribus atque, illo obcaecati dolorem ipsa hic.
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}