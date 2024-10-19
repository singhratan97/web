import { ReactComponent as Fb } from "./dependencies/utils/fb.svg";
import { ReactComponent as Li } from "./dependencies/utils/li.svg";
import { ReactComponent as In } from "./dependencies/utils/in.svg";
import { ReactComponent as Wh } from "./dependencies/utils/wh.svg";
import { ReactComponent as Yt } from "./dependencies/utils/yt.svg";
import { NavLink } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
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
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
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
