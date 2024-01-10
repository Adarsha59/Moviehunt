import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaUserAlt,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "./style.scss";
import ContentWrapper from "../ContentWrapper/wrapper";

const Footer = () => {
  const facebookLink =
    "https://www.facebook.com/profile.php?id=100085518428605";
  const webLink = "https://aadarshapaudyal.com.np/?i=1";
  const webLink1 = "https://adarsha59.github.io/";

  return (
    <>
      <hr />
      <footer className="footer">
        <ContentWrapper>
          <ul className="menuItems">
            <li className="menuItem">
              <a
                href={webLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                
                About
              </a>
            </li>
          </ul>
          <div className="infoText">
            &copy; Welcome my first react project | All rights reserved |
            Created by Adarsha 2024
          </div>
          <div className="socialIcons">
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaFacebookF />
            </a>
            <a
              href={webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaUserAlt />
            </a>
          </div>
        </ContentWrapper>
      </footer>
    </>
  );
};

export default Footer;
