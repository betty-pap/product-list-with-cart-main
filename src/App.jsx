import Card from "./components/Card";
import data from "../data.json";
import YourCart from "./components/YourCart";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

  const updateCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);

      if (existingItem) {
        // Update quantity or remove if quantity is 0
        if (quantity === 0) {
          return prevCart.filter((cartItem) => cartItem.name !== item.name);
        } else {
          return prevCart.map((cartItem) =>
            cartItem.name === item.name ? { ...cartItem, quantity } : cartItem
          );
        }
      } else {
        // Add new item
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const handleDelete = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.name !== item.name));
  };

  const clearCart = () => {
    setCart([]); // Reset cart to an empty array
  };

  return (
    <div className="container">
      <h1>Desserts</h1>

      <div className="option-grid">
        {data.map((item, index) => {
          return (
            <Card key={index} item={item} category={item.category} name={item.name} price={item.price} image={item.image} cart={cart} updateCart={updateCart}/>
          )
        })}
      </div>

      <div className="cart">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <span className="your-cart-h">Your Cart (0) </span>
            <p>Your added items will appear here</p>
          </div>
        ) : (
          <YourCart cart={cart} handleDelete={handleDelete} clearCart={clearCart}/>
        )}
        
        
      </div>
    </div>
  )
}

export default App;