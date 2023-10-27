import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import BottomBar from "./bottombar";

export default function Root() {
  return (
    <>
      <div class="full-body">
        <SideBar />
        <div class="page-body">
          <TopBar name="Mamaroneck High School Robotics" sub="FTC Team #8490 and MATE Tiger Sharks"/>
          <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A id fugiat voluptatibus nam magnam velit culpa saepe eveniet necessitatibus. Odio deleniti quia recusandae doloribus atque, illo obcaecati dolorem ipsa hic.
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}