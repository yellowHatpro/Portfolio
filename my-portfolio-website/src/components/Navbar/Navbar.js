import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { useState } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"

export const Navbar = () => {
  const [state, stateHandler] = useState(false);
  const handleClick = () => {
    stateHandler((prev) => !prev);
  };
  const [navBarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">yellowHatpro</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
                <Link to= {`${item.link}`}>
                      <li key={index}>
              <a className={item.cName} href={item.url}>
                 {item.name}
              </a>
            </li>
                </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
