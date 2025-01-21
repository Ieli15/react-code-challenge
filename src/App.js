import React, { useState } from 'react';
import { products } from './data';
import ProductList from './ProductList';
import Cart from './Cart';
import './index.css'; 


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productToRemove) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productToRemove.id));
  };

  const increaseQuantity = (product) => {
    setCart((prevCart) => prevCart.map(item => 
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (product) => {
    setCart((prevCart) => prevCart.map(item => 
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  return (
    <div>
      <h1>Simple E-Commerce Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  );
};

export default App;
