import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./sidebar";
import TopBar from "./topbar";

export default function Error() {
  return (
    <>
      <SideBar />
      <article>
        <TopBar />
      </article>
    </>
  );
}