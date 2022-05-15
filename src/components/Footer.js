import React from "react";
import "./FooterStyles.css";
import {
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaSearch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <p>12344 Acme St.</p>
              <h4>Houston, Tx</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />{" "}
              1-000-000-0000
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />{" "}
              <a href="mailto:a1iyev@ukr.net"> a1iyev@ukr.net</a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam"
          </p>
          <div className="social">
            <a href="https://github.com/mukhammed3">
              <FaGithub
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>

            <a href="https://aliev.tech">
              <FaSearch
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>

            <a href="https://www.linkedin.com/in/muhammed-aliyev-231971234/">
              <FaLinkedin
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
