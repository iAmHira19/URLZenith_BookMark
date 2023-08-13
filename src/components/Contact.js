import React from 'react';
import './Contact.css';

const Footer = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><i className="fas fa-paper-plane"></i> hiraamamatali19@gmail.com</p>
                        <p><i className="fas fa-phone-square-alt"></i>+92 3269664645</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=100070345276825&mibextid=ZbWKwL"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://github.com/iAmHira19"><i className="fa-brands fa-github"></i></a>
                            <a href="https://instagram.com/heer_3980?igshid=ZGUzMzM3NWJiOQ=="><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/hira-amanat-800104245"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        <a href="images/Hira_CV.pdf" download className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form>
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn3">submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p> Copyright © 2023 URLZenith , Hira Amanat Ali</p>
            </div>
        </div>
    );
}

export default Footer;
