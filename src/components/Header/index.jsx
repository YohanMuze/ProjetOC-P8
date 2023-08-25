import { Link, useParams } from "react-router-dom";
import KasaLogo from "../../assets/Kasa_Logo.png";
import KasaLogoSmall from "../../assets/Kasa_Logo_Small.png";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { UrlContext } from "../UrlProvider";

function Header() {
  const { currentUrl } = useContext(UrlContext);
  console.log(UrlContext);

  const { newUrl } = useParams();

  const home = "http://localhost:3000/";
  const apropos = "http://localhost:3000/A-Propos";
  const [isHome, setIsHome] = useState(false);
  const [isAPropos, setIsAPropos] = useState(false);

  useEffect(() => {
    console.log("set");
    let ignore = false;
    if (!ignore && currentUrl.href === home) {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
    if (!ignore && currentUrl.href === apropos) {
      setIsAPropos(true);
    } else {
      setIsAPropos(false);
    }
    if (!ignore && !currentUrl.href) {
      setIsHome(false);
      setIsAPropos(false);
    }
    return () => {
      ignore = true;
    };
  }, [currentUrl.href, newUrl]);

  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={KasaLogo} alt="logo de Kasa" />
        <img
          className="header__logo-small"
          src={KasaLogoSmall}
          alt="logo de Kasa"
        />
      </Link>
      <ul className="header__ul">
        <li>
          <Link
            to="/"
            className={
              isHome ? "border-bottom header__ul__link" : "header__ul__link"
            }
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/A-Propos"
            className={
              isAPropos ? "border-bottom header__ul__link" : "header__ul__link"
            }
          >
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
