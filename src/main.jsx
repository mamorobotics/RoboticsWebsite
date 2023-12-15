import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import "./index.css";
import AboutUs from "./routes/about-us";
import TheTeam from "./routes/the-team";
import Outreach from "./routes/outreach";
import FTC from "./routes/ftc";
import MATE from "./routes/mate";

if (localStorage.getItem('darkmode') == null) {
  localStorage.setItem('darkmode', "dark");
}
document.getElementById("root").setAttribute("class", localStorage.getItem('darkmode'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/the-team",
    element: <TheTeam />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/outreach",
    element: <Outreach />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ftc",
    element: <FTC />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mate",
    element: <MATE />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode basename="/RoboticsWebsite">
    <RouterProvider router={router} />
  </React.StrictMode>
);