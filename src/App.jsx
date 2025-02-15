import React from 'react';
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Gellary from './Components/Gellary/Gellary';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element = {<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
