import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

const CartDropdown = ({ items, dispatch }) => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items-container">
        {items.length ? (
          items.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <h1 className="empty-msg">your cart is empty</h1>
        )}
      </div>
      <Link to="/checkout">
        <CustomButton
          type="button"
          onClick={() => dispatch(toggleCartDropdown())}
        >
          checkout
        </CustomButton>
      </Link>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ items: selectCartItems });

export default connect(mapStateToProps)(CartDropdown);
