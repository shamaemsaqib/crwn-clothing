import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

function Header() {
  return (
    <div className="header">
      <Link to={"/"} className="logo-container">
        <Logo />
      </Link>
      <div className="header-links-container">
        <Link to={"/"} className="header-link">
          <p>home</p>
        </Link>
        <Link to={"/shop"} className="header-link">
          <p>shop</p>
        </Link>
        <Link to={"/contact"} className="header-link">
          <p>contact</p>
        </Link>
        <Link to={"/register"} className="header-link">
          <p>login / register</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
