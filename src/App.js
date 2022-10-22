import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemListDetailed from './Components/ItemListDetailed/ItemListDetailed';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Components/Cart/Cart"
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './Context/CartContext.js';
import Chekcout from './Components/Checkout/Checkout';

function App() {
  return (
      <CartContextProvider>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <Navbar />
            </header>
              <Routes>
                  <Route path="/" element={<ItemListContainer greetings={"Estos son nuestros productos"}/>}></Route>
                  <Route path="/category/:categoryId" element={<ItemListContainer greetings={"Estos son nuestros productos"}/>}></Route>
                  <Route path="/detail/:productId" element={<ItemListDetailed greeting={"Detalle de Productos"}/>}></Route>
                  <Route path="/Cart" element={<Cart/>}></Route>
                  <Route path="/Checkout" element={<Chekcout/>}></Route>
                  <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
              </Routes>
          </div>
        </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
