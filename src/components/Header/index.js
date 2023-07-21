import { Link } from "react-router-dom";
import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div class="header-container">
        <div class="logo">Your Logo</div>
        <ul class="nav-menu">
          <li class="nav-item">
            <Link to={"/"} class="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/contact"} class="nav-link">
              Contact
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/about"} class="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
