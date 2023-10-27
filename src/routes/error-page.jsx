import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./component-routes/sidebar";
import TopBar from "./component-routes/topbar";
import BottomBar from "./component-routes/bottombar";

export default function Error() {
  return (
    <>
      <div className="full-body">
        <SideBar />
        <div className="page-body">
          <TopBar name="You shouldn't be here..." sub="Im sorry, but this page doesn't exist."/>
          <article>
            
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}