import { useState, useEffect } from "react";

const YourCart = ({cart, handleDelete, clearCart}) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const confirmOrder = () => {
    setOrderConfirmed(true);
  }

  useEffect(() => {
    if (orderConfirmed) {
      document.body.style.overflow = "hidden"; // Disable background scrolling
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  
    return () => {
      document.body.style.overflow = "auto"; // Cleanup when component unmounts
    };
  }, [orderConfirmed]);
  

  return (
    <div className="your-cart">
      <span className="your-cart-h">Your Cart ({getTotalItems()}) </span>
      {cart.length === 0 && !orderConfirmed ? (
        <p>Your added items will appear here</p>
      ) : orderConfirmed ? (
        <div className="order-overlay">
          <div className="order-confirmed">
            <img src="assets/images/icon-order-confirmed.svg" alt="icon-order-confirmed" />
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>
            <div className="confirmed-list">
              {cart.map((item) => (
                <li key={item.name} className="selected-item">
                  <img src={`${item.image.thumbnail}`} alt={item.name} className="order-thumbnail" />
                  <div className="li-text-section">
                    <div className="selected-item-name">{item.name}</div>
                    <div className="selected-item-quantity">{item.quantity}x <span className="original-price">@ ${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <span className="final-price">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
              <h3>Order Total <span>${totalPrice.toFixed(2)}</span></h3>
            </div>
            <button className="new-order-btn" onClick={() => { setOrderConfirmed(false), clearCart() }}>Start New Order</button>
          </div>
        </div>
      ) : (
        <div className="selected-desserts">
          <ul>
            {cart.map((item) => (
              <li key={item.name} className="selected-item">
                <div className="li-text-section">
                  <div className="selected-item-name">{item.name}</div>
                  <div className="selected-item-quantity">{item.quantity}x <span className="original-price">@ ${item.price.toFixed(2)}</span>  <span className="final-price">${(item.price * item.quantity).toFixed(2)}</span></div>
                </div>
                <button className="delete-btn" 
                 onClick={() => handleDelete(item)}>
                  {/* <img src="assets/images/icon-remove-item.svg" alt="icon-remove-item.svg" /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <h3>Order Total <span>${totalPrice.toFixed(2)}</span></h3>

          <div className="carbon-neutral">
            This is a <span>carbon-neutral</span> delivery
          </div>

          <button className="confirm-order-btn" onClick={confirmOrder}>
            Confirm Order
          </button>
        </div>
      )}
    </div>
  )
}

export default YourCart