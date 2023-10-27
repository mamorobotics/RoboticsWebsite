import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./component-routes/sidebar";
import TopBar from "./component-routes/topbar";
import BottomBar from "./component-routes/bottombar";

export default function MATE() {
  return (
    <>
      <div class="full-body">
        <SideBar />
        <div class="page-body">
          <TopBar name="MATE" sub="MHS Tiger Sharks"/>
          <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A id fugiat voluptatibus nam magnam velit culpa saepe eveniet necessitatibus. Odio deleniti quia recusandae doloribus atque, illo obcaecati dolorem ipsa hic.
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}