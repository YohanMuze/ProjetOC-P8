import KasaLogoWhite from "../../assets/Kasa_Logo_White.png";

function Footer() {

    return (
        <div className="footer">
            <div className="footer__box">
                <img src={ KasaLogoWhite } className="footer__box__logo" alt="logo de kasa"></img>
                <p className="footer__box__rights">© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )

}

export default Footer