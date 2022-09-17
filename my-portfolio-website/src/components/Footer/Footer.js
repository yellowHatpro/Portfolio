import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-items">
          <a href="https://github.com/yellowHatpro">
            {" "}
            <i className="fab fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/_aashu_aswal_">
            {" "}
            <i className="fab fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/ashutosh-aswal-785101203/">
            {" "}
            <i className="fab fa-brands fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/AshuAswal7">
            {" "}
            <i className="fab fa-brands fa-twitter"></i>
          </a>
        </div>
      </footer>
    );
  }
}
export default Footer;
