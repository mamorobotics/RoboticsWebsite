import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import BottomBar from "./bottombar";

export default function Error() {
  return (
    <>
      <div class="full-body">
        <SideBar />
        <div class="page-body">
          <TopBar name="You shouldn't be here..." sub="Im sorry, but this page doesn't exist."/>
          <article>
            
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}