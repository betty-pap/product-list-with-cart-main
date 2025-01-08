const Card = ({image, category, name, price}) => {
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
        <button className="add-to-cart"> 
          Add to Cart
          </button>
      </div>

      <div className="text-section">
        <h3>{category}</h3>
        <h2>{name}</h2>
        <span className="price">${price}</span>
      </div>

    </div>
  )
}

export default Card