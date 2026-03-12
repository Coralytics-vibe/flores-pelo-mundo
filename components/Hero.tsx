
import React, { useState, useEffect } from 'react';
import { client, HERO_QUERY, HeroData } from '../lib/hygraph';

const images = [
  'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1968&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2072&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  const defaultHero = {
    title: "Viaje muito mais,",
    subtitle: "Receba diariamente as passagens mais baratas saindo de Brasília e São Paulo para o Brasil e o mundo, direto no seu WhatsApp.",
    ctaText: "Saber mais",
    ctaLink: "#problema",
    backgroundImages: images.map(src => ({ url: src }))
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.request<{ heroSections: HeroData[] }>(HERO_QUERY);
        if (data.heroSections && data.heroSections.length > 0) {
          setHeroData(data.heroSections[0]);
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };
    fetchData();
  }, []);

  const displayData = heroData || defaultHero;
  const currentImages = displayData.backgroundImages.length > 0 ? displayData.backgroundImages : defaultHero.backgroundImages;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [currentImages]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images Slideshow */}
      {currentImages.map((img, index) => (
        <div
          key={img.url}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ backgroundImage: `url('${img.url}')` }}
          aria-hidden="true"
          role="presentation"
        />
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-4">
          {displayData.title.split(',')[0]}, {' '}
          <span
            className="bg-[#F79824] text-white px-4 py-1 md:px-6 md:py-2 rounded-xl inline-block"
          >
            {displayData.title.split(',')[1]?.trim() || "Pagando Barato"}
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          {displayData.subtitle}
        </p>
        <a
          href={displayData.ctaLink}
          className="bg-[#F79824] text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-[#E88C1A] transition-all transform hover:scale-105 shadow-lg hover:shadow-[#F79824]/50"
        >
          {displayData.ctaText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
