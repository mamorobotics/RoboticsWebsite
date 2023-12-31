import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import BottomBar from "./bottombar";

export default function Outreach() {
  document.title = "Outreach";
  return (
    <>
      <div className="full-body">
        <SideBar logo="ftc"/>
        <div className="page-body">
          <TopBar name="Outreach" sub="Improving our community along with the team"/>
          <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A id fugiat voluptatibus nam magnam velit culpa saepe eveniet necessitatibus. Odio deleniti quia recusandae doloribus atque, illo obcaecati dolorem ipsa hic.
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}