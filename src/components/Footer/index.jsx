import KasaLogoWhite from "../../assets/Kasa_Logo_White.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__box">
        <img
          src={KasaLogoWhite}
          className="footer__box__logo"
          alt="logo de kasa"
        ></img>
        <div className="footer__box__content">
          <p className="footer__box__content__rights">© 2020 Kasa.</p>
          <p className="footer__box__content__rights">All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
