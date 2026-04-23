
import React from 'react';
import { motion } from 'framer-motion';

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

const guarantees = [
  { icon: <ShieldIcon className="w-8 h-8" />, text: "Compra Segura" },
  { icon: <HeartIcon className="w-8 h-8" />, text: "Satisfação Garantida" },
  { icon: <LockIcon className="w-8 h-8" />, text: "Privacidade Protegida" },
];

const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-24 bg-[#EBF1FA] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section 1: Comunidade Completa */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Comunidade Completa</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Alertas BSB (nacional e internacional), SP (internacional), compra de passagens em dinheiro, networking e estratégias — <span className="font-bold text-[#246BCE]">tudo organizado em um só lugar</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Anual - Comunidade */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative bg-[#246BCE] text-white rounded-2xl shadow-2xl p-8 pt-12 text-center border-4 border-[#F79824]"
            >
              <div className="absolute top-0 left-0 bg-[#F79824] text-white text-xs font-black px-4 py-2 rounded-tl-xl rounded-br-xl transform -rotate-2">
                MAIS VANTAJOSO
              </div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-wider">Plano Anual</h3>
              <div className="mb-6 flex flex-col items-center">
                <div className="flex items-start">
                  <span className="text-2xl font-bold mt-2 mr-1">R$</span>
                  <span className="text-7xl font-black tracking-tighter">41</span>
                  <span className="text-xl font-bold mt-4 ml-1">/12x</span>
                </div>
                <p className="text-blue-100 font-medium mt-2">ou R$ 399 com desconto</p>
              </div>
              <a 
                href="https://pay.herospark.com/assinatura-anual-comunidade-completa-flores-pelo-mundo-487261" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-[#F79824] hover:bg-[#E88C1A] text-white font-black py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-orange-500/30"
              >
                QUERO ENTRAR AGORA
              </a>
            </motion.div>

            {/* Plano Semestral - Comunidade */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#246BCE] text-white rounded-2xl shadow-xl p-8 pt-12 text-center border-4 border-transparent"
            >
              <h3 className="text-2xl font-black mb-6 uppercase tracking-wider">Plano Semestral</h3>
              <div className="mb-6 flex flex-col items-center">
                <div className="flex items-start">
                  <span className="text-2xl font-bold mt-2 mr-1">R$</span>
                  <span className="text-7xl font-black tracking-tighter">50</span>
                  <span className="text-xl font-bold mt-4 ml-1">/6x</span>
                </div>
                <p className="text-blue-100 font-medium mt-2">ou R$ 267 com desconto</p>
              </div>
              <a 
                href="https://pay.herospark.com/assinatura-semestral-comunidade-completa-flores-pelo-mundo-487265" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-white/10 hover:bg-white/20 text-white font-black py-4 rounded-xl text-lg transition-all border-2 border-white/20"
              >
                QUERO ENTRAR AGORA
              </a>
            </motion.div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-gray-300 w-full mb-24 opacity-50"></div>

        {/* Section 2: Plano Brasília */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Plano Brasília</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Só alertas de <span className="font-bold">passagens com milhas</span> saindo de Brasília <br className="hidden md:block" />
              <span className="text-gray-500">(sem acesso à comunidade)</span>
            </p>
          </motion.div>

          {/* Plano Anual - Brasília */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="max-w-md mx-auto bg-[#246BCE] text-white rounded-2xl shadow-xl p-8 pt-12 text-center border-4 border-transparent"
          >
            <h3 className="text-2xl font-black mb-6 uppercase tracking-wider">Plano Anual</h3>
            <div className="mb-6 flex flex-col items-center">
              <div className="flex items-start">
                <span className="text-2xl font-bold mt-2 mr-1">R$</span>
                <span className="text-7xl font-black tracking-tighter">20</span>
                <span className="text-xl font-bold mt-4 ml-1">/12x</span>
              </div>
              <p className="text-blue-100 font-medium mt-2">ou R$ 199 com desconto</p>
            </div>
            <a 
              href="https://pay.herospark.com/assinatura-anual-plano-brasilia-flores-pelo-mundo-487574" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-white/10 hover:bg-white/20 text-white font-black py-4 rounded-xl text-lg transition-all border-2 border-white/20"
            >
              QUERO SÓ OS ALERTAS
            </a>
          </motion.div>
        </div>

        {/* Footer Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <p className="text-2xl md:text-3xl font-extrabold text-gray-900 max-w-4xl mx-auto leading-tight">
            Você está a um passo de receber as melhores oportunidades na hora certa, antes do preço subir.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 text-[#246BCE]">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {item.icon}
                <span className="font-black text-gray-700 tracking-wide uppercase text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
