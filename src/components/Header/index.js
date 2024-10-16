import "./header.scss";
import { NavLink } from "react-router-dom";
import menu from "../../assets/menu.png";
import { useState } from "react";

const Header = () => {
  const [clickMenu, setClickMenu] = useState(false);
  return (
    <>
      <div className="header-container">
        <header>
          <div id="logo">
            <NavLink
              to="/"
              onClick={() => {
                setClickMenu(false);
              }}
            >
              Widetran Language Services
              <br />
              Private Limited
            </NavLink>
          </div>
          <div id="menu">
            <img
              className="menu"
              src={menu}
              alt="menu"
              onClick={() => {
                setClickMenu((prev) => !prev);
              }}
            />
          </div>
          <nav>
            <div>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#893999" : "#232932",
                })}
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/about-us"
                style={({ isActive }) => ({
                  color: isActive ? "#893999" : "#232932",
                })}
              >
                About us
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/services"
                style={({ isActive }) => ({
                  color: isActive ? "#893999" : "#232932",
                })}
              >
                Services
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/domains"
                style={({ isActive }) => ({
                  color: isActive ? "#893999" : "#232932",
                })}
              >
                Domains
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/contact-us"
                style={({ isActive }) => ({
                  color: isActive ? "#893999" : "#232932",
                })}
              >
                Contact
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/join-us"
                style={({ isActive }) => ({
                  color: isActive ? "#893999" : "#232932",
                })}
              >
                Join Us
              </NavLink>
            </div>
          </nav>
        </header>
      </div>
      <div className={`hamburger-menu ${clickMenu ? "nav-show" : ""}`}>
        <div className="home-nav">
          <NavLink
            to="/"
            onClick={() => {
              setClickMenu(false);
            }}
            style={({ isActive }) => ({
              color: isActive ? "#893999" : "#232932",
            })}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/about-us"
            onClick={() => {
              setClickMenu(false);
            }}
            // state={{ clickMenu }}
            // to={{
            //   pathname: "/about-us",
            //   state: { clickMenu },
            // }}
            style={({ isActive }) => ({
              color: isActive ? "#893999" : "#232932",
            })}
          >
            About us
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/services"
            onClick={() => {
              setClickMenu(false);
            }}
            style={({ isActive }) => ({
              color: isActive ? "#893999" : "#232932",
            })}
          >
            Services
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/domains"
            onClick={() => {
              setClickMenu(false);
            }}
            style={({ isActive }) => ({
              color: isActive ? "#893999" : "#232932",
            })}
          >
            Domains
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/contact-us"
            onClick={() => {
              setClickMenu(false);
            }}
            style={({ isActive }) => ({
              color: isActive ? "#893999" : "#232932",
            })}
          >
            Contact
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/join-us"
            onClick={() => {
              setClickMenu(false);
            }}
            style={({ isActive }) => ({
              color: isActive ? "#893999" : "#232932",
            })}
          >
            Join Us
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
