import { Form, redirect, Link } from "react-router-dom";

export default function TopBar({name, sub}) {
  return (
    <>
        <div class="topbar">
            <h1>{name}</h1>
            <h2>{sub}</h2>
        </div>
    </>
  );
}