import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import React, { useState } from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import CoinDeatils from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";


function App() {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <Header setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coins" element={<Coins searchQuery={searchQuery}/>} />
        <Route path="/exchanges" element={<Exchanges/>} />
        <Route path="/coin/:id" element={<CoinDeatils/>} />
      </Routes>
      <Footer/>
    </Router>
    )
}

export default App;
