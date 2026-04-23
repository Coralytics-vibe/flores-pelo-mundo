
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, HERO_QUERY, HeroData } from '../lib/hygraph';

const images = [
  'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1968&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2072&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroData, setHeroData] = useState<HeroData | null>(() => {
    // Try to load from cache to avoid flicker
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem('hero_data_cache');
      return cached ? JSON.parse(cached) : null;
    }
    return null;
  });

  const defaultHero = {
    title: "Descubra viagens,",
    subtitle: "Pague utilizando milhas, gastando muito pouco.",
    ctaText: "Veja agora como participar",
    ctaLink: "#problema",
    backgroundImages: images.map(src => ({ url: src }))
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.request<{ bannerHomes: HeroData[] }>(HERO_QUERY);
        if (data.bannerHomes && data.bannerHomes.length > 0) {
          const newHeroData = data.bannerHomes[0];
          setHeroData(newHeroData);
          localStorage.setItem('hero_data_cache', JSON.stringify(newHeroData));
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

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col items-center justify-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4 max-w-5xl mx-auto tracking-tight"
        >
          Não é que as passagens <br className="hidden sm:block" /> saindo de Brasília estão caras.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#F79824] to-yellow-300 max-w-5xl mx-auto tracking-tight drop-shadow-sm pb-2"
        >
          É que você só vê quando <br className="hidden sm:block" /> as melhores oportunidades já passaram!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-10 text-gray-200 font-medium leading-relaxed"
        >
          Quando você começa a ver as melhores passagens na hora certa, antes do preço subir, o jogo muda.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          href="#problema"
          className="text-xl md:text-2xl lg:text-3xl font-bold text-white hover:text-[#F79824] transition-colors flex flex-col items-center gap-3 mt-4"
        >
          <span className="bg-black/30 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm">✈️ E É ISSO AQUI QUE ACONTECE!</span>
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl lg:text-5xl mt-3"
          >
            👇🏼
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
