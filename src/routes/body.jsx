import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import BottomBar from "./bottombar";

export default function Body(props) {
  return (
    <>
        <div className="bg-black dark:bg-black flex text-black dark:text-white py-2 space-x-2 min-h-screen font-Monda">
            <SideBar logo="ftc"/>
            <div className="space-y-2 w-full min-h-full">
                <TopBar name={document.title} sub={props.sub}/>
                <article className="mr-2 p-2 bg-[#272727] rounded-2xl">
                    {props.children}
                </article>
                <BottomBar />
            </div>
        </div>
    </>
  );
}