import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router';
import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './nullstyle.css';
import './index.css';
import Home from './home/Home.jsx';
// Header
import Header from './header/Header.jsx'
// About Us
import AboutUs from './aboutUs/AboutUs.jsx'
// Services
import Services from './services/Services.jsx'
// UseCases
import UseCases from './useCases/UseCases.jsx'
// Pricing
import Pricing from './pricing/Pricing.jsx'
// Blog
import Blog from './blog/Blog.jsx'
// Footer
import Footer from './footer/Footer.jsx'

const rootElement = document.getElementById('root');

const MainApp = () => {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/useCases" element={<UseCases />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    );
};

createRoot(rootElement).render(<MainApp />);
