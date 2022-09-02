import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIconContainer from "../cart-icon/cart-icon.container";

import { auth } from "../../firebase/firebase.utils";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartDropdown } from "../../redux/cart/cart.selectors";

function Header({ currentUser, cartDropdownHidden }) {
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
        <CartIconContainer />
      </div>
      {!cartDropdownHidden ? <CartDropdown /> : null}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropdownHidden: selectCartDropdown,
});

export default connect(mapStateToProps)(Header);
