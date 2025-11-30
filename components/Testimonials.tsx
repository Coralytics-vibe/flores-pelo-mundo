import React from 'react';

// List of all uploaded images
const testimonialImages = [
  "11.webp", "12.webp", "13.webp", "14.webp", "15.webp",
  "16.webp", "17.webp", "18.webp", "19.webp", "2.webp",
  "21.webp", "22.webp", "23.webp", "25.webp", "26.webp",
  "27.webp", "28.webp", "3.webp", "31.webp", "32.webp",
  "33.webp", "34.webp", "36.webp", "37.webp", "38.webp",
  "39.webp", "4.webp", "40.webp", "41.webp", "43.webp",
  "44.webp", "45.webp", "47.webp", "48.webp", "49.webp",
  "5.webp", "6.webp", "7.webp", "8.webp", "9.webp"
];

// Split images into 2 rows for the marquee
const midPoint = Math.ceil(testimonialImages.length / 2);
const row1 = testimonialImages.slice(0, midPoint);
const row2 = testimonialImages.slice(midPoint);

const MarqueeRow: React.FC<{ images: string[]; direction?: 'left' | 'right'; speed?: number }> = ({
  images,
  direction = 'left',
  speed = 40
}) => {
  return (
    <div className="relative flex overflow-hidden py-4 group">
      <div
        className={`flex gap-6 animate-marquee ${direction === 'right' ? 'animate-marquee-reverse' : ''} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Duplicate the set twice to ensure seamless infinite scrolling */}
        {[...images, ...images, ...images].map((img, index) => (
          <div
            key={`${img}-${index}`}
            className="relative flex-shrink-0 w-64 md:w-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer bg-white border border-gray-100"
          >
            <img
              src={`/images/${img}`}
              alt="Depoimento de viajante"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <span className="text-[#623CEA] font-semibold tracking-wider uppercase text-sm">Wall of Love</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 !leading-tight">
            O que dizem nossos <span className="text-[#623CEA]">viajantes</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já estão explorando o mundo com a gente.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1 - Moves Left */}
        <MarqueeRow images={row1} direction="left" speed={120} />

        {/* Row 2 - Moves Right */}
        <MarqueeRow images={row2} direction="right" speed={140} />
      </div>


    </section>
  );
};

export default Testimonials;
