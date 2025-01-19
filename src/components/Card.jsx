import { useState } from "react"

const Card = ({item, image, category, name, price, addToCart, updateCart}) => {
  const [quantity, setQuantity] = useState(0);
  const handleAddToCart = () => {
    setQuantity(1);
    addToCart(item, 1);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(item, newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = quantity - 1;
    if (newQuantity <= 0) {
      setQuantity(0);
      updateCart(item, 0);
    } else {
      setQuantity(newQuantity);
      updateCart(item, newQuantity);
    }
  }

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
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        ) : (
          <div className="card-counter-btn">
            <button className="counter-btn" onClick={handleDecrement}>-</button>
            <span className="option-quantity" >{quantity}</span>
            <button className="counter-btn" onClick={handleIncrement}>+</button>
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