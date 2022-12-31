import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import {Link} from "react-router-dom"

export const Navbar = () => {
 
  return (
    <nav>
      <h1 className="navbar-items-logo">yellowHatpro</h1>
      <ul className="navbar-items">
        {MenuItems.map((item, index) => {
          return (
                <Link to= {`${item.link}`}>
                      <li key={index}>
              <a className="navbar-items-links" href={item.link}>
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
