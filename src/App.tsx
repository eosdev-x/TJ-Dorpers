import React from 'react';
import { ArrowDown } from 'lucide-react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import ContactForm from './components/ContactForm';
import { Hero } from './components/Hero';
import { About } from './components/About';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Our Flock</h2>
          <ImageSlider />
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Contact Us</h2>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} TJ Dorpers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}