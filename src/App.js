import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation, Footer } from './components/shared';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Campaign from './components/campaign/Campaign';
import Partners from './components/partners';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
