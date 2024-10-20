import { ReactComponent as Fb } from "./dependencies/utils/fb.svg";
import { ReactComponent as Li } from "./dependencies/utils/li.svg";
import { ReactComponent as In } from "./dependencies/utils/in.svg";
import { ReactComponent as Wh } from "./dependencies/utils/wh.svg";
import { ReactComponent as Yt } from "./dependencies/utils/yt.svg";
import { NavLink } from "react-router-dom";
import "./footer.scss";
import { useEffect, useState } from "react";

const Footer = () => {
  const [whatsapplink, setWhatsapplink] = useState("");
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detect if the user is on a mobile device
    const isMobile = /android|iPad|iPhone|iPod/i.test(userAgent);

    if (isMobile) {
      // If on mobile, open WhatsApp app
      setWhatsapplink("whatsapp://send?phone=+917358457949&text=Hello!");
    } else {
      // If on desktop, open WhatsApp Web
      setWhatsapplink(
        "https://web.whatsapp.com/send?phone=+917358457949&text=Hello!"
      );
    }
  }, []);

  console.log(whatsapplink, "sdfvnfdvbjdf");
  return (
    <div className="footer">
      {/* <p>Copyright 2024</p>
      <p>All Social Media Handler Link</p>
      <p>Address</p>
      <p>List of links that sshown in header</p> */}
      <section className="social-media-links-section">
        <div className="social-media-links-div">
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <Fb className="s-m-l" />
          </a>
        </div>
        <div className="social-media-links-div">
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <Li className="s-m-l" />
          </a>
        </div>
        <div className="social-media-links-div">
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <In className="s-m-l" />
          </a>
        </div>
        <div className="social-media-links-div">
          <a href={whatsapplink} target="_blank" rel="noreferrer">
            <Wh className="s-m-l" />
          </a>
        </div>
        <div className="social-media-links-div">
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <Yt className="s-m-l" />
          </a>
        </div>
      </section>
      <hr className="social-hr" />
      <p className="copyright">
        Copyright © 2024 Widetran Language Services Private Limited
      </p>
      <div className="footer-links">
        <nav>
          <div>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#893999" : "white",
              })}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about-us"
              style={({ isActive }) => ({
                color: isActive ? "#893999" : "white",
              })}
            >
              About us
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                color: isActive ? "#893999" : "white",
              })}
            >
              Services
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/domains"
              style={({ isActive }) => ({
                color: isActive ? "#893999" : "white",
              })}
            >
              Domains
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact-us"
              style={({ isActive }) => ({
                color: isActive ? "#893999" : "white",
              })}
            >
              Contact
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/join-us"
              style={({ isActive }) => ({
                color: isActive ? "#893999" : "white",
              })}
            >
              Join Us
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
