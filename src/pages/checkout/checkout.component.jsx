import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";

import Stripe from "../../components/stripe/stripe.component";
import CheckoutItemContainer from "../../components/checkout-item/checkout-item.container";

import {
  selectCartItems,
  selectCheckoutTotal,
} from "../../redux/cart/cart.selectors";

function Checkout({ cartItems, checkoutTotal }) {
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
            <CheckoutItemContainer key={item.id} item={item} />
          ))}
        </div>
        <div className="checkout-total-container">
          <span className="checkout-total">Total: ${checkoutTotal}</span>
        </div>
      </div>
      <p className="test-card-msg">
        *Please use the following test credit card for payments*
        <br /> 4242 4242 4242 4242 - Exp: 01/30 - CVV: 123
      </p>
      <Stripe totalPrice={checkoutTotal} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  checkoutTotal: selectCheckoutTotal,
});

export default connect(mapStateToProps)(Checkout);
