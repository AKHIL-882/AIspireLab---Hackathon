import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import UseCases from './components/UseCases';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        <Hero />
        <Problems />
        <UseCases />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
