import storeItems from "./items.json"
import Store from "./components/Store"
import Cart from "./components/Cart"
function App() {
  const StyleObj = {
    fontSize: 40,
    color: "black",
    textAlign: "center",
    marginTop: 20
  }
  return (
    <>
      <h1 style={StyleObj}>Ecommerce App</h1>
      <Store items={storeItems} />
      <Cart />
    </>
  )
}

export default App
