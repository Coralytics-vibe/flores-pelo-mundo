
import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1968&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2072&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images Slideshow */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ backgroundImage: `url('${src}')` }}
          aria-hidden="true"
          role="presentation"
        />
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-4">
          Viaje muito mais,{' '}
          <span
            className="bg-[#F79824] text-white px-4 py-1 md:px-6 md:py-2 rounded-xl inline-block"
          >
            Pagando Barato
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          Receba diariamente as passagens mais baratas saindo de Brasília e São Paulo para o Brasil e o mundo, direto no seu WhatsApp.
        </p>
        <a
          href="#problema"
          className="bg-[#F79824] text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-[#E88C1A] transition-all transform hover:scale-105 shadow-lg hover:shadow-[#F79824]/50"
        >
          Saber mais
        </a>
      </div>
    </section>
  );
};

export default Hero;
