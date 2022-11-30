import React, { useState } from "react";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./stripe.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

import {
  selectCartItemsTotalCount,
  selectCheckoutTotal,
} from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { clearCart } from "../../redux/cart/cart.actions";

function Stripe() {
  const totalPrice = useSelector(selectCheckoutTotal);
  const currentUser = useSelector(selectCurrentUser);
  const cartTotalCount = useSelector(selectCartItemsTotalCount);

  const stripe = useStripe();
  const elements = useElements();

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!stripe) return;

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        ContentType: "application/json",
      },
      body: JSON.stringify({ amount: totalPrice * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    await stripe
      .confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : "Guest",
          },
        },
      })
      .then((paymentResult) => {
        if (paymentResult.paymentIntent.status === "succeeded") {
          setIsProcessingPayment(false);
          dispatch(clearCart());
          navigate("/payment-successful");
        } else if (paymentResult.error) {
          setIsProcessingPayment(false);
          navigate("/payment-unsuccessful");
        }
      })
      //If user clicks button without inputting anything
      .catch((error) => setIsProcessingPayment(false));
  };

  return (
    <>
      {cartTotalCount !== 0 ? (
        <>
          <form
            onSubmit={onSubmitHandler}
            className="stripe-container"
            autoComplete="off"
          >
            <h2>Enter Your Credit Card Details:</h2>
            <CardElement
              options={{
                iconStyle: "solid",
                hidePostalCode: true,
                style: {
                  base: {
                    color: "#000",
                    fontWeight: "500",
                    fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                    fontSize: "16px",
                    fontSmoothing: "antialiased",
                  },
                },
              }}
            ></CardElement>
            <CustomButton
              type="submit"
              inverted
              isLoading={isProcessingPayment}
            >
              Pay Now
            </CustomButton>
          </form>
        </>
      ) : null}
    </>
  );
}

export default Stripe;
