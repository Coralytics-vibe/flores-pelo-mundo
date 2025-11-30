import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const features = [
  {
    title: 'Balcão de Milhas',
    description: 'Não tem milhas? Sem problemas! Compre passagens de outros membros com segurança e economia.',
    imageSrc: '/images/balcao de milhas - imagem.webp'
  },
  {
    title: 'Alertas Temáticos',
    description: 'Promoções especiais para férias escolares, feriados prolongados e escapadas de final de semana.',
    imageSrc: '/images/alertas personalizados.webp'
  },
  {
    title: 'Networking de Viajantes',
    description: 'Faça amizade com outros apaixonados por viagens, compartilhe experiências e planeje roteiros em conjunto.',
    imageSrc: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Suporte Especializado',
    description: 'Nossa equipe está pronta para tirar suas dúvidas sobre milhas, promoções e planejamento de viagens.',
    imageSrc: 'https://images.unsplash.com/photo-1534349989498-8e6a57a84357?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'Garantia de 7 Dias',
    description: 'Entre, explore e se não for para você, peça seu dinheiro de volta. Simples assim. Risco zero!',
    imageSrc: '/images/7 dias de garantia .webp'
  }
];

interface FeatureItemProps {
  feature: typeof features[0];
  isOpen: boolean;
  onClick: () => void;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-start text-left py-6 group"
        aria-expanded={isOpen}
      >
        <h3 className={`text-2xl font-semibold transition-colors duration-300 ${isOpen ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-800'}`}>
          {feature.title}
        </h3>
        <ChevronDownIcon className={`w-6 h-6 flex-shrink-0 transform transition-transform duration-300 mt-2 ${isOpen ? 'rotate-180 text-gray-800' : 'text-gray-400'}`} />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pt-2 pb-4' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 leading-relaxed pr-8">{feature.description}</p>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-gradient-to-br from-white to-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 !leading-tight">
            Vantagens que só a nossa <span className="text-[#623CEA]">comunidade</span> oferece
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Vamos muito além de simples alertas. Oferecemos um ecossistema completo para você viajar mais e melhor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side: Accordion */}
          <div>
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                feature={feature}
                isOpen={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Right side: Image */}
          <div>
            <div className="relative h-96 lg:h-[550px] w-full sticky top-28">
              {features.map((feature, index) => (
                <div
                  key={feature.imageSrc}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  aria-hidden={activeIndex !== index}
                >
                  <img
                    src={feature.imageSrc}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
