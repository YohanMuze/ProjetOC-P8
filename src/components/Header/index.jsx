import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import KasaLogo from "../../assets/Kasa_Logo.png";
import KasaLogoSmall from "../../assets/Kasa_Logo_Small.png";

function Header() {
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
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "border-bottom header__ul__link"
                : isActive
                ? "border-bottom header__ul__link"
                : "header__ul__link"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/A-Propos"
            className={({ isActive, isPending }) =>
              isPending
                ? "border-bottom header__ul__link"
                : isActive
                ? "border-bottom header__ul__link"
                : "header__ul__link"
            }
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
