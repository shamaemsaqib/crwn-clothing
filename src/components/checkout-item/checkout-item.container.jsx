import { connect } from "react-redux";

import CheckoutItem from "./checkout-item.component";

import {
  addItemToCart,
  clearItemFromCart,
  remoteItemFromCart,
} from "../../redux/cart/cart.actions";

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(remoteItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

const CheckoutItemContainer = connect(null, mapDispatchToProps)(CheckoutItem);

export default CheckoutItemContainer;
