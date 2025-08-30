import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation, Footer } from './components/shared';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
