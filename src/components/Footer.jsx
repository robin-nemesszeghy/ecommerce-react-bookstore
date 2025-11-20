import React from "react";
import Logo from "../assets/Little Red Bird Publishing Favicon Transparent.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/">
            <figure className="footer__logo">
              <img className="footer__logo--img" src={Logo} alt="" />
            </figure>
          </a>
          <div className="footer__list">
            <a className="footer__link" href="/">
              Home
            </a>
            <span className="footer__link no-cursor">About</span>
            <a className="footer__link" href="/books">
              Books
            </a>
            <a className="footer__link" href="/cart">
              Cart
            </a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2026 Little Red Bird Publishing
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
