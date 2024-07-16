import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div
        className="burgerIcon"
        onClick={() => {
          if (
            document.querySelector(".burgerMenu").classList.contains("show")
          ) {
            document.querySelector(".burgerMenu").classList.remove("show");
            document.querySelector(".burgerIcon").classList.remove("change");
          } else {
            document.querySelector(".burgerMenu").classList.add("show");
            document.querySelector(".burgerIcon").classList.add("change");
          }
          // document.querySelector(".burgerMenu").classList.toggle("show");
          // document.querySelector(".burgerIcon").classList.toggle("change");
        }}
      >
        <div className="bar1 bar"></div>
        <div className="bar2 bar"></div>
        <div className="bar3 bar"></div>
      </div>
      <div className="burgerMenu">
        <NavLink to="/login" style={{ textDecoration: "none" }}>
          <button className="btn black">Log in</button>
        </NavLink>
        <NavLink to="/signup" style={{ textDecoration: "none" }}>
          <button className="btn white">Sign up</button>
        </NavLink>
        <ul className="menuItem">
          <NavLink to="/business" style={{ textDecoration: "none" }}>
            <li className="item">Create a business account</li>
          </NavLink>
          <NavLink to="/weddingServices" style={{ textDecoration: "none" }}>
            <li className="item">Wedding Services</li>
          </NavLink>
          <NavLink to="/venues" style={{ textDecoration: "none" }}>
            <li className="item">Available venues</li>
          </NavLink>
          <NavLink to="/eventManager" style={{ textDecoration: "none" }}>
            <li className="item">Plan a event</li>
          </NavLink>
        </ul>
        <footer className="burgerMenuFooter">
          <li className="item">Follow Us:</li>
          <ul className="socialHandles">
            <li className="handles">
              <a href="https://www.facebook.com/" target="_blank">
                <img src={facebook} alt="Social Media Handle" />
              </a>
            </li>
            <li className="handles">
              <a href="https://www.instagram.com/" target="_blank">
                <img src={instagram} alt="Social Media Handle" />
              </a>
            </li>
            <li className="handles">
              <a href="https://twitter.com/" target="_blank">
                <img src={twitter} alt="Social Media Handle" />
              </a>
            </li>
            <li className="handles">
              <a href="https://www.youtube.com/ " target="_blank">
                <img src={youtube} alt="Social Media Handle" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
      <div className="nav_menu">
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "1.6rem",
            color: "#A76B09",
          }}
        >
          <h2>Samaroha</h2>
        </NavLink>
      </div>
      <div className="nav_menu">
        <div className="nav_menu_items">
          <ul>
            <NavLink to="/meetingsManager" style={{ textDecoration: "none" }}>
              <li>Corporate Meetings</li>
            </NavLink>
            <NavLink to="/weddingManager" style={{ textDecoration: "none" }}>
              <li>Weddings</li>
            </NavLink>
            <NavLink to="/partyManager" style={{ textDecoration: "none" }}>
              <li>Celebrations</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="login_signup">
        <NavLink to="/register">
          <button>Sign In</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
