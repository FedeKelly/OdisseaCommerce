import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div>
        <ItemListContainer greetings={"Estos son nuestros productos"}/>
      </div>
    </div>

  );
}

export default App;
