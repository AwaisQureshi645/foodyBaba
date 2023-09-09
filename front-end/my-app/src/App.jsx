import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
// import Signup from './Pages/Signup';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Navbar from './component/Header/Navbar';
import Product_detail_page from './component/product_component/Product_detail_page';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Check_out from './Pages/Check_out';

function App() {

  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/signup' element={<Signup/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/products' element={<Products/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/products/:id' element={<Product_detail_page/>}/>
    <Route exact path='/checkout' element={<Check_out/>}/>


   </Routes>
   {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, fugiat?</h1> */}
   </BrowserRouter>
    </>
  )
}

export default App
