import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.scss";

import Home from "./pages/Home/index.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Page404 } from "./pages/404";
import APropos from "./pages/A-Propos";
import FicheLogement from "./pages/Fiche-Logement";

export async function fetchLogementsJSON() {
  const response = await fetch("http://localhost:3000/logements.json");
  const datas = await response.json();
  return datas;
}

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Page404 />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Fiche-Logement/:id",
        element: <FicheLogement />,
      },
      {
        path: "A-Propos",
        element: <APropos />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
