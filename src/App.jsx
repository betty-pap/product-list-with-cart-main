import Card from "./components/Card";
import data from "../data.json";

const App = () => {
  return (
    <div className="container">
      <h1>Desserts</h1>

      {data.map((item, index) => {
        return (
          <Card key={index} category={item.category} name={item.name} price={item.price} image={item.image}/>
        )
      })}

      <div className="cart">
        <p className="your-cart">Your Cart  </p>
        {/* Quantity  */}
        <img src="../assets/images/illustration-empty-cart.svg" alt="empty-cart-img" />
        <p>Your added items will appear here</p>
      </div>
    </div>
  )
}

export default App;