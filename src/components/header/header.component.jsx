import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

function Header({ currentUser }) {
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
        {currentUser ? (
          <div className="header-link signed-in">
            <button className="sign-out-btn" onClick={() => auth.signOut()}>
              sign out
            </button>
            <p className="user-name">{currentUser.displayName}</p>
          </div>
        ) : (
          <Link to={"/sign-in"} className="header-link">
            <p>sign in</p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
