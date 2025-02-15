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
import HowItWorks from './components/HowItWorks';
import FeaturesNew from './components/FeaturesNew';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsNew from './components/TestimonialsNew';
import PricingNew from './components/PricingNew';
import TrustedBySection from './components/TrustedBySection';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        <Hero />
        <HowItWorks />
        {/* <Problems />
        <UseCases /> */}
        <FeaturesNew />
        <FeaturesSection />
        {/* <Testimonials /> */}
        <TestimonialsNew />
        {/* <Pricing /> */}
        <PricingNew />
        <TrustedBySection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
