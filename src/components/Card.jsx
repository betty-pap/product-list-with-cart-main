import { useState, useEffect } from "react"

const Card = ({id, item, image, category, name, price, cart, updateCart}) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart({ name, price, category, image }, newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity >= 0 ? newQuantity : 0);
    updateCart({ name, price, category, image }, newQuantity >= 0 ? newQuantity : 0);
  }

   // Reset quantity when an item is removed from the cart
   useEffect(() => {
    const foundItem = cart.find((cartItem) => cartItem.name === item.name);
    if (!foundItem) {
      setQuantity(0); // Reset to 0 when the item is deleted
    }
  }, [cart, item.name]);

  return (
    <div className="option">
      <div className="image-section">
        <picture>
          <source srcSet={image.tablet} media="(min-width: 768px)"/>
          <source srcSet={image.desktop} media="(min-width: 1024px)"/>
          <img src={image.mobile} alt={image.name}
            style={{
              width: '100%',          // Make the image responsive
              height: 'auto',         // Maintain aspect ratio
              borderRadius: '8px',    // Add rounded corners
              objectFit: 'cover'      // Ensure the image fits nicely
            }}
          />
        </picture>
        
        {quantity === 0 ? (
          <button className="add-to-cart" onClick={handleIncrement}>
            Add to Cart
          </button>
        ) : (
          <div className="card-counter-btn">
            <button className="counter-btn" onClick={handleDecrement}>
              <img src="assets/images/icon-decrement-quantity.svg" alt="icon-decrement-quantity" />
            </button>
            <span className="option-quantity" >{quantity}</span>
            <button className="counter-btn" onClick={handleIncrement}>
              <img src="assets/images/icon-increment-quantity.svg" alt="icon-increment-quantity" />
            </button>
          </div>
        )}
      </div>

      <div className="text-section">
        <h3>{category}</h3>
        <h2>{name}</h2>
        <span className="price">${price.toFixed(2)}</span>
      </div>

    </div>
  )
}

export default Card