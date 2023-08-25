import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./sass/style.scss";

import Home from "./pages/Home/index.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page404 from "./pages/404";
import APropos from "./pages/A-Propos";
import FicheLogement from "./pages/Fiche-Logement";
import { UrlProvider } from "./components/UrlProvider";

export async function fetchLogementsJSON() {
  const response = await fetch("http://localhost:3000/logements.json");
  const datas = await response.json();
  return datas;
}

function Root() {
  return (
    <>
      <UrlProvider>
        <Header />
        <Outlet />
        <Footer />
      </UrlProvider>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Page404 />, //<Navigate to="/404" replace={true} />,
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
