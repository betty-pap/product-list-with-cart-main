import Card from "./components/Card";
import data from "../data.json";
import YourCart from "./components/YourCart";

const App = () => {
  return (
    <div className="container">
      <h1>Desserts</h1>

      {data.map((item, index) => {
        return (
          <Card key={index} category={item.category} name={item.name} price={item.price} image={item.image} />
        )
      })}

      <div className="cart">
        <span className="your-cart-h">Your Cart (0) </span>
        {/* Quantity  */}
        <p>Your added items will appear here</p>

        <YourCart />
      </div>
    </div>
  )
}

export default App;