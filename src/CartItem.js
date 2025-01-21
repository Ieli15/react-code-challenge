import React from 'react';

const CartItem = ({ item, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>${item.price} x {item.quantity}</p>
      <button onClick={() => increaseQuantity(item)}>+</button>
      <button onClick={() => decreaseQuantity(item)}>-</button>
      <button onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
