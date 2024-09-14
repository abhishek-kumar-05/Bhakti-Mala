import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="nav">
      <h1>भक्ति माला</h1>
      <ul id="navbar">
        <li>
          <a href="#" id="login-icon">
            <i id="register" className="fa-solid fa-user fa-xl"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
