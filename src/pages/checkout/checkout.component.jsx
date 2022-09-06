import React from "react";
import { useSelector } from "react-redux";

import "./checkout.styles.scss";

import Stripe from "../../components/stripe/stripe.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCheckoutTotal,
} from "../../redux/cart/cart.selectors";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const checkoutTotal = useSelector(selectCheckoutTotal);

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
};

// Old HOC Syntax
// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   checkoutTotal: selectCheckoutTotal,
// });

// export default connect(mapStateToProps)(Checkout);

export default Checkout;
