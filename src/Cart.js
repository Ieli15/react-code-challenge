import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))}
          <h4>Total Price: ${totalPrice}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
