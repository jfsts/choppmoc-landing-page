import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Calculator from './components/Calculator';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen antialiased selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Calculator />
        <Gallery />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
