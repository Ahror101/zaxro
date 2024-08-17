import React from 'react';
import { CiFacebook, CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div id='biz-haqimizda' className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo">MyWebsite</h2>
            <p>
              Welcome to MyWebsite, where we offer amazing content and services. Stay connected with us through our social media channels and get in touch for any inquiries.
            </p>
            <div className="footer-icons">
              <a href="https://facebook.com/" aria-label="Facebook" className="icon facebook">
                <CiFacebook />
              </a>
              <a href="https://twitter.com/" aria-label="Twitter" className="icon twitter">
                <CiTwitter />
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram" className="icon instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer-section links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/yangiliklar">Yangiliklar</a></li>
              <li><a href="/mahsulotlar">Mahzulotlar</a></li>
              <li><a href="/biz_haqimizda">Biz haqimizda</a></li>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h4>Contact Us</h4>
            <form action="#" method="post">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
