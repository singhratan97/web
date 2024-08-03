import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <div id="logo">
          <NavLink to="/">Widetran Language Services</NavLink>
        </div>
        <nav>
          <div>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#893999" : "black",
              })}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about-us"
              style={({ isActive }) => ({
                color: isActive ? "#893999" : "black",
              })}
            >
              About us
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/products"
              style={({ isActive }) => ({
                color: isActive ? "#893999" : "black",
              })}
            >
              Products
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#893999" : "black",
              })}
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
