import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./sidebar";

export default function Error() {
  return (
    <>
      <SideBar />
      <article>
        <h1>OOPS!</h1>
        <p>I dont think you are supposed to be here!</p>
      </article>
    </>
  );
}