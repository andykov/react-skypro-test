import "./scss/app.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="content">
          <Routes>
            <Route index element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
