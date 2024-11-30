import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* <Sheep className="h-8 w-8 text-emerald-600" /> */}
            <span className="ml-2 text-xl font-semibold text-gray-900">TJ Dorpers</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            <a href="#gallery" className="text-gray-700 hover:text-emerald-600 transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">About</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Gallery</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}