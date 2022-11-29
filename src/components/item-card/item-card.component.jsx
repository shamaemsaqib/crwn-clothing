import React from "react";
import { useDispatch } from "react-redux";

import "./item-card.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

import { addItemToCart } from "../../redux/cart/cart.actions";

function ItemCard({ item }) {
  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();

  return (
    <div className="item-card">
      <div
        className="item-card-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <section className="item-card-info">
        <p className="info-name">{name.toUpperCase()}</p>
        <p className="info-price">{`$${price}`}</p>
      </section>
      <CustomButton
        type="button"
        inverted={true}
        onClick={() => dispatch(addItemToCart(item))}
      >
        add to cart
      </CustomButton>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   addItemToCart: (item) => dispatch(addItemToCart(item)),
// });

// export default connect(null, mapDispatchToProps)(ItemCard);

export default ItemCard;
