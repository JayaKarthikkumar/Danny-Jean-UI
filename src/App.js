import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewArrival from "./pages/NewArrival";
import Men from "./pages/Men";
import AboutUs from "./pages/AboutUs";
import Sale from "./pages/Sale";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import CustomStudio from "./pages/CustomStudio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrival" element={<NewArrival />} />
        <Route path="/men/*" element={<Men />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/custom-studio" element={<CustomStudio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" component={SingleProduct} /> 


      </Routes>
     
    </Router>
  );
}

export default App;
