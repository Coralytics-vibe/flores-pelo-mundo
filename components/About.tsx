
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 text-center">
            <img 
              src="https://picsum.photos/400/400?image=823" 
              alt="Camila Flores"
              className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg border-4 border-white"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Olá, eu sou a Camila Flores!</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Desde 2008, sou apaixonada pelo mundo das milhas e por encontrar maneiras de viajar mais e melhor. O que começou como um hobby se transformou em uma missão de vida: ajudar outras pessoas a realizarem seus sonhos de viagem sem precisar gastar uma fortuna.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Criei o primeiro grupo de alertas de passagens de Brasília e, hoje, a comunidade "Flores pelo Mundo" já ajudou mais de 1.800 pessoas a conhecerem novos destinos. Minha maior alegria é ver as fotos e relatos de vocês viajando pelo mundo!
            </p>
            <a 
              href="#planos" 
              className="bg-[#F79824] text-white font-bold text-lg py-3 px-8 rounded-full hover:bg-[#E88C1A] transition-all transform hover:scale-105 shadow-md"
            >
              Quero Entrar para a Comunidade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
