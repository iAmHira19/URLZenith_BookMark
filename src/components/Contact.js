import React from 'react';
import './Contact.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h3>URL Zenith</h3>
          <p>
          Empower your online presence with URLZenith's smart bookmarking.Join us on a journey to streamline your online resources
          </p>
        </div>
        <div className="footer__col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div className="footer__col">
          <h4>Address</h4>
          <p>
            <span>Address:</span> Lahore Pakistan
          </p>
          <p><span>Email:</span> hiraamanatali19@gmail.com</p>
          <p><span>Phone:</span> +92 3295687995</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100070345276825&mibextid=ZbWKwL">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://github.com/iAmHira19">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/heer_3980?igshid=ZGUzMzM3NWJiOQ==">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/hira-amanat-800104245">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2023 URL Zenith, Hira Amanat Ali
      </div>
    </footer>
  );
};

export default Footer;
