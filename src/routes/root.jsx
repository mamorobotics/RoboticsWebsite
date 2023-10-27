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
            
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}