import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import {Link} from "react-router-dom"
import Burger from "../Burger/Burger";

export const Navbar = () => {
 
  return (
    <nav>
      <div className="navbar">
      <h1 className="navbar-items-logo">yellowhatpro</h1>
      <ul className="navbar-items">
        {MenuItems.map((item, index) => {
          return (
                <Link className = 'navbar-items-links' to= {`${item.link}`}>
                      <li key={index}>
                 {item.name}
            </li>
                </Link>
          );
        })}
      </ul>
      <Burger/>
      </div>
    </nav>
  );
};

export default Navbar;
