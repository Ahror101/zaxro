import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import "./styles.scss";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div data-aos="zoom-in-down" id="biz-haqimizda" className="container">
        <div className="row">
          <div>
            <h6>About</h6>
            <p>Yaqinda ko'rilgan</p>
            <p>Eng ko'p sotilganlar</p>
            <p>Yangi kelganlar</p>
            <p>Bu hafta mashhur</p>
          </div>

          <div>
            <h6>Kategoriyalar</h6>
            <p>Mebel</p>
            <p>Uy jihozlari</p>
            <p>O‘simlik idishlari</p>
            <p>Stullar</p>
            <p>Idish-tovoqlar</p>
          </div>

          <div>
            <h6>Bizning kompaniya</h6>
            <p>Biz haqimizda</p>
            <p>Bo‘sh ish o‘rinlari</p>
            <p>Biz bilan bog‘laning</p>
            <p>Maxfiylik</p>
            <p>Qaytarish siyosati</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hurshid">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul  className="social-icons">
              <li>
                <a className="facebook" href="https://facebook.com/">
                  <i className="facebook" style={{ fontSize: "24px" }}>
                    <CiFacebook />
                  </i>
                </a>
              </li>
              <li>
                <a className="twitter" href="https://twitter.com/">
                  <i className="fa fa-twitter" style={{ fontSize: "24px" }}>
                    <CiTwitter />
                  </i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="https://www.instagram.com/">
                  <i className="fa fa-dribbble" style={{ fontSize: "24px" }}>
                    <FaInstagram />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
