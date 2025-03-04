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

  //const [borderStyle, setBorderStyle] = useState({});
  // setBorderStyle({border: '2px solid red'}),

  // useEffect(() => {
  //   if (quantity > 0) {
  //     document.querySelector(".image-section img").style.border = "2px solid red";
  //   } else {
  //     document.querySelector(".image-section img").style.border = "";
  //   }
  // }, [quantity]);

  return (
    <div className="option">
      <div className="image-section">
        <picture>
          <source srcSet={image.desktop} media="(min-width: 1024px)" />
          <source srcSet={image.tablet} media="(min-width: 768px)" />
          <img src={`../${image.mobile}`} alt={image.name} />
        </picture>
        
        {quantity === 0 ? (
          <button className="add-to-cart" onClick={handleIncrement}>
            Add to Cart
          </button>
        ) : (
          <div className="card-counter-btn">
            <button className="counter-btn" onClick={() => { handleDecrement()} }>
              {/* <img src="assets/images/icon-decrement-quantity.svg" alt="icon-decrement-quantity" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/>
              </svg>
            </button>
            <span className="option-quantity" >{quantity}</span>
            <button className="counter-btn" onClick={() => {handleIncrement()} }>
              {/* <img src="assets/images/icon-increment-quantity.svg" alt="icon-increment-quantity" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
              </svg>
              
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
