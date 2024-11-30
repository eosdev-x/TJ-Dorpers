import React from 'react';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/images/hero-bg.jpeg';


export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">TJ Dorpers</h1>
        <p className="text-xl md:text-2xl mb-8">Premium Dorper & White Dorper Sheep</p>
        <a href="#about" className="btn btn-primary">
          Learn More
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}