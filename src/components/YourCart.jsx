
const YourCart = ({cart, handleDelete}) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <div className="your-cart">
      <span className="your-cart-h">Your Cart ({getTotalItems() }) </span>
      {cart.length === 0 ? (
        <p>Your added items will appear here</p>
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
                  <img src="assets/images/icon-remove-item.svg" alt="icon-remove-item.svg" />
                </button>
              </li>
            ))}
          </ul>
          <h3>Order Total <span>${totalPrice.toFixed(2)}</span></h3>

          <div className="carbon-neutral">
            This is a <span>carbon-neutral</span> delivery
          </div>

          <button className="confirm-order-btn">
            Confirm Order
          </button>
        </div>
      )}
    </div>
  )
}

export default YourCart