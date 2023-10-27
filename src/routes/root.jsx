import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./component-routes/sidebar";
import TopBar from "./component-routes/topbar";
import BottomBar from "./component-routes/bottombar";

export default function Root() {
  return (
    <>
      <div class="full-body">
        <SideBar />
        <div class="page-body">
          <TopBar name="Mamaroneck High School Robotics" sub="FTC Team #8490 and MATE Tiger Sharks"/>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro neque aliquam nihil libero! Officiis, beatae. Veniam fuga alias fugit laudantium! Corporis quibusdam assumenda laboriosam aperiam. Rerum nisi dignissimos optio.
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}