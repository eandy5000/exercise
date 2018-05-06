import React from "react";
import ReactDOM from "react-dom";
import ProductContainer from "./components/productComponents/productContainer";
import Cart from "./components/cart";

export default function App() {
  return (
    <div className="sans-serif">
      <Cart />
      <ProductContainer />
    </div>
  );
}
