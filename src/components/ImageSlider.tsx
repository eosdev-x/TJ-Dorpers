import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slider1 from '@/assets/images/slider1-bg.jpg';
import slider2 from '@/assets/images/slider2-bg.jpg';
import slider3 from '@/assets/images/slider3-bg.jpg';


const images = [
  slider1,
  slider2,
  slider3
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prev = () => setCurrentIndex((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () => setCurrentIndex((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-xl">
      <div
        className="absolute h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="absolute h-full w-full"
            style={{ left: `${index * 100}%` }}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}