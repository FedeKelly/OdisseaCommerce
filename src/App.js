import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemListDetailed from './Components/ItemListDetailed/ItemListDetailed';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
            <Routes>
                <Route path="/" element={<ItemListContainer greetings={"Estos son nuestros productos"}/>}></Route>
                <Route path="/category/:categoryId" element={<ItemListContainer greetings={"Estos son nuestros productos"}/>}></Route>
                <Route path="/detail/:productId" element={<ItemListDetailed greeting={"Detalle de Productos"}/>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
