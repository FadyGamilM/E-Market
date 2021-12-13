import React from 'react';
import {Route , BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import ShoppingCart from './pages/ShoppingCart';
import UserProfile from './pages/UserProfile';
import Category from './components/Category';
import LoginScreen from './pages/LoginScreen';
import ProductScreen from './pages/ProductScreen';
import RegisterScreen from './pages/RegisterScreen';
import Add from "./pages/Add"
import OtherUserProfile from './pages/OtherUserProfile';
import Report from "./pages/Chart"

const App = () => {
  return (
    <Router>
     <Navbar/>
     <Routes>
        <Route  path="/" element={<Home/>}></Route>
       <Route path="/add" element={<Add/>} />
        <Route path="/cart" element={ <ShoppingCart/>}></Route>
        <Route path="/profile/:userID" element={<OtherUserProfile />} />
        <Route path="/profile" element={ <UserProfile/>}></Route>
        <Route path="/products/:category" element={ <Category/>}></Route>   
        <Route path="/login" element={<LoginScreen/>} />     
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="/specific-product" element={<ProductScreen/>} />
 <Route path="/report" element={<Report/>} />

     </Routes>
     <Footer/>
    </Router>
  );
};

export default App
