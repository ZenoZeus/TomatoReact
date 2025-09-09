import logo from './logo.svg';
import './App.css';
import Nav from "./Nav/page.jsx"
import { Routes,Route } from 'react-router-dom';
import Home from "./Home/Page.jsx"
import { useState } from 'react';
import Cart from "./Cart/Cart.jsx"


function App() {

  const [bag, setbag] = useState([]);
  
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home bag={bag} setbag={setbag}/>}/>
      <Route path="/cart" element={<Cart bag={bag} setbag={setbag}/>}/>
    </Routes>
    </>
  );
}

export default App;
