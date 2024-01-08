import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop'; 
import ShopCategory from './Pages/SubCategory'; 
import Product from './Pages/Product'; 
import Cart from './Pages/Cart'; 
import LoginSignup from './Pages/LoginSignup'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import banners from './Components/Assets/crops_banner.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={banners} category="mens" />} />
          <Route path='/women' element={<ShopCategory banner={banners} category="womens" />} />
          <Route path='/kids' element={<ShopCategory banner={banners} category="kids" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
