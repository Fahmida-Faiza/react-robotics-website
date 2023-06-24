import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Navbar from './components/Navbar'
import Footer from './New folder/components/Footer';



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>

<Footer/>

   
    </>
  );
}

export default App;