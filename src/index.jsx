import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./sass/style.scss";

import Home from "./pages/Home/index.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page404 from "./pages/404";
import APropos from "./pages/A-Propos";
import FicheLogement from "./pages/Fiche-Logement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Page404 />} />
        <Route
          path={"/Fiche-Logement/:id"}
          element={<FicheLogement />}
          errorElement={<Page404 />}
        />
        <Route
          path="/A-Propos"
          element={<APropos />}
          errorElement={<Page404 />}
        />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);
