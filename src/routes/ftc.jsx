import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import BottomBar from "./bottombar";

export default function FTC() {
  document.title = "FTC";
  return (
    <>
      <div className="full-body">
        <SideBar logo="ftc"/>
        <div className="page-body">
          <TopBar name="FTC" sub="Team #8490"/>
          <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A id fugiat voluptatibus nam magnam velit culpa saepe eveniet necessitatibus. Odio deleniti quia recusandae doloribus atque, illo obcaecati dolorem ipsa hic.
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}