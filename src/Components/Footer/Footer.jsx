import React from "react";
import "./Footer.css";
import { FaUserSecret, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Footer_Logo" />
          <p>
            I am a full stack developer from India, passionate about creating
            innovative web applications. I love to learn new technologies and
            improve my skills. Let's connect and build something amazing together!
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <FaUserSecret />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2025 Kenche Bala Dattu. All rights reserved.</p>
        <div className="footer-bottom-right">
          <a href="https://www.linkedin.com/in/kenche-bala-dattu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Baladattu" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
