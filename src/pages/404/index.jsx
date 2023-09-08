import "./404.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Body404() {
  return (
    <>
      <div className="not-found">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__p">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="not-found__home-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </>
  );
}

function Page404({ header = false, footer = false }) {
  return (
    <>
      <Header />
      <Body404 />
      <Footer />
    </>
  );
}

export { Body404, Page404 };
