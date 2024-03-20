import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import "./index.css";
import AboutUs from "./routes/about-us";
import TheTeam from "./routes/the-team";
import Outreach from "./routes/outreach";
import FTC from "./routes/ftc";
import MATE from "./routes/mate";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/the-team" element={<TheTeam />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/ftc" element={<FTC />} />
        <Route path="/mate" element={<MATE />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
