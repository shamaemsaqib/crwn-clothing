import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

function Checkout({ cartItems }) {
  return (
    <div className="checkout-container">
      <div className="checkout-items-section">
        <div className="headings-container">
          <div className="heading">Product</div>
          <div className="heading">Description</div>
          <div className="heading">Quantity</div>
          <div className="heading">Price</div>
          <div className="heading">Remove</div>
        </div>
        <div className="checkout-items-container">
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
        </div>
        <div className="checkout-total-container">
          <h1 className="checkout-total">Total: $0</h1>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
