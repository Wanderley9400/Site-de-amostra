import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Contact />
    </div>
  );
}

export default App;