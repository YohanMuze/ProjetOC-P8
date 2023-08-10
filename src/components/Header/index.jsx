import { Link } from "react-router-dom"
import KasaLogo from "../../assets/Kasa_Logo.png"

function Header() {

    return (
        <nav className="header">
            <Link to="/">
                <img src={ KasaLogo } alt="logo de Kasa" />
            </Link>
            <ul className="header__ul">
                <li><Link to="/" className="header__Link">Accueil</Link></li>
                <li><Link to="/A-Propos"  className="header__Link">A Propos</Link></li>
            </ul>
        </nav>
    )
}

export default Header