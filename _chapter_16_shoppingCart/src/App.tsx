import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [viewCart, setViewCart] = useState(false);

  const pageContent = viewCart ? <ProductList /> : <Cart />;

  return (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      {/* <Footer viewCart={viewCart} /> */}
    </>
  );
}

export default App;
