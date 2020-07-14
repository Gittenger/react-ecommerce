import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  NameSpan,
} from "./cart-item.styles";

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameSpan>{name}</NameSpan>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
