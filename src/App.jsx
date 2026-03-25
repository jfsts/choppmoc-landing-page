import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Calculator from './components/Calculator';
import Testimonials from './components/modern/Testimonials';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import AnimatedBackground from './components/modern/AnimatedBackground';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f0c] antialiased selection:bg-emerald-500/30 selection:text-white overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Calculator />
          <Gallery />
          <Testimonials />
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </div>
  );
}

export default App;
