import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import { Navigate } from "react-router-dom";
import Category from "./pages/category";


function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar appears on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/:category" element={<ProductList />} />
<Route path="/products" element={<Navigate to="/products/electronics" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
<Route path="/category/:categoryName" element={<Category />} />
        
      </Routes>
      <Footer /> {/* <-- Add this line */}
    </BrowserRouter>
  );
}

export default App;
