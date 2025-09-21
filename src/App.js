import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation, Footer, WhatsAppButton, NotFound } from './components/shared';
import Home from './components/home/Home';
// Temporarily disabled imports
// import About from './components/about/About';
// import Contact from './components/contact';
// import Campaign from './components/campaign/Campaign';
// import Partners from './components/partners';
// import Products from './components/products';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Temporarily disabled routes */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/products" element={<Products />} /> */}
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+1234567890" />
    </div>
  );
}

export default App;
