import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 !leading-tight">
            O que nossos <span className="text-[#623CEA]">viajantes</span> dizem
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            A maior recompensa é ver nossos membros realizando sonhos e viajando pelo mundo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-gray-200 rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.03] transition-transform duration-300 aspect-[9/16] flex items-center justify-center p-4">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="mt-2 text-sm font-semibold text-gray-500">
                  Espaço para depoimento {index + 1}
                </p>
                <p className="text-xs text-gray-400">
                  (Imagem será inserida aqui)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
