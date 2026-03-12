
import React from 'react';

// Icons for the guarantee section
const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const LockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const plans = [
  {
    name: "COMUNIDADE COMPLETA / ANUAL",
    description: "ACESSO AOS 5 GRUPOS DA COMUNIDADE FPM POR UM ANO + GUIA COLABORATIVO DE VIAGENS!",
    price: "41",
    period: "12x",
    fullPrice: "ou R$ 399 com desconto",
    buttonText: "QUERO VIAJAR BARATO!",
    href: "https://pay.herospark.com/assinatura-anual-comunidade-completa-flores-pelo-mundo-487261",
    isPopular: true,
  },
  {
    name: "COMUNIDADE COMPLETA / SEMESTRAL",
    description: "ACESSO AOS 5 GRUPOS DA COMUNIDADE FPM POR 6 MESES + GUIA COLABORATIVO DE VIAGENS!",
    price: "50",
    period: "6x",
    fullPrice: "ou R$ 267 com desconto",
    buttonText: "QUERO VIAJAR BARATO!",
    href: "https://pay.herospark.com/assinatura-semestral-comunidade-completa-flores-pelo-mundo-487265",
    isPopular: false,
  },
  {
    name: "PLANO BRASÍLIA / ANUAL",
    description: "ACESSO SOMENTE AO GRUPO DE ALERTAS DE PASSAGENS COM MILHAS SAINDO DE BSB!",
    price: "20",
    period: "12X",
    fullPrice: "ou R$ 199 com desconto",
    buttonText: "QUERO VIAJAR BARATO!",
    href: "https://pay.herospark.com/assinatura-anual-plano-brasilia-flores-pelo-mundo-487574",
    isPopular: false,
  },
];

const guarantees = [
  { icon: <ShieldIcon className="w-8 h-8" />, text: "Compra Segura" },
  { icon: <HeartIcon className="w-8 h-8" />, text: "Satisfação Garantida" },
  { icon: <LockIcon className="w-8 h-8" />, text: "Privacidade Protegida" },
];

const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-20 bg-[#EBF1FA]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Planos de assinatura</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Entrar no FPM é fácil, prático e seguro!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch pt-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#246BCE] text-white rounded-xl shadow-lg p-8 flex flex-col h-full text-center transition-transform duration-300
              ${plan.isPopular ? 'lg:scale-105 border-4 border-[#F79824]' : 'border-4 border-transparent'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F79824] text-white text-sm font-bold px-4 py-1 rounded-full">
                  MAIS POPULAR
                </div>
              )}

              <div className="flex-grow flex flex-col">
                <h3 className="text-lg font-extrabold tracking-wide">{plan.name}</h3>
                <p className="mt-4 text-sm font-medium flex-grow min-h-[100px] flex items-center justify-center">{plan.description}</p>

                <div className="mt-8 flex items-start justify-center">
                  <span className="text-2xl font-semibold mt-2 mr-1">R$</span>
                  <span className="text-6xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="text-xl font-semibold mt-2 ml-1">/{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-gray-200">{plan.fullPrice}</p>
              </div>

              <div className="mt-10">
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-lg px-6 py-4 text-lg font-bold uppercase tracking-wider transition-colors duration-200 bg-[#1D56A5] hover:bg-[#164280]"
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-semibold text-gray-800 max-w-3xl mx-auto">
            Você está a um passo de nunca mais precisar procurar promoções de passagens!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8 text-[#246BCE]">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {item.icon}
                <span className="font-bold text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
