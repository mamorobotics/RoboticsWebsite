import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./component-routes/sidebar";
import TopBar from "./component-routes/topbar";
import BottomBar from "./component-routes/bottombar";

export default function Root() {
  return (
    <>
      <div className="full-body">
        <SideBar />
        <div className="page-body">
          <TopBar name="Mamaroneck High School Robotics" sub="FTC Team #8490 and MATE Tiger Sharks"/>
          <article>
            
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}