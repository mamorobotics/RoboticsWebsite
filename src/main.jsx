import React from "react";
import ReactDOM from "react-dom/client";
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
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

export default function App() {
  return (
    <BrowserRouter>
      <HashRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Root />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/the-team" element={<TheTeam />} />
          <Route exact path="/outreach" element={<Outreach />} />
          <Route exact path="/ftc" element={<FTC />} />
          <Route exact path="/mate" element={<MATE />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </HashRouter>
    </BrowserRouter>
  );
}
