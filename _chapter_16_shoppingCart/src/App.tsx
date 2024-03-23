import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useState } from "react";
import { CartProvider } from "./context/CartProvider";
import { ProductProvider } from "./context/ProductProvider";

function App() {
  const [viewCart, setViewCart] = useState(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  return (
    <ProductProvider>
      <CartProvider>
        <Header viewCart={viewCart} setViewCart={setViewCart} />
        {pageContent}
        <Footer viewCart={viewCart} />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
