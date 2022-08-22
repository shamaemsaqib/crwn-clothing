import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

function CartDropdown({ items }) {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items-container">
        {items.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <CustomButton type="button">checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = ({ cart: { items } }) => ({
  items,
});

export default connect(mapStateToProps)(CartDropdown);
