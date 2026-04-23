import React from 'react';
import { motion } from 'framer-motion';

const IfYouGotHere: React.FC = () => {
  const points = [
    {
      icon: "🔍",
      text: (
        <>
          Abre mil abas tentando achar <strong className="text-gray-900 font-bold">passagem barata</strong>, tanto em <strong className="text-gray-900 font-bold">milhas</strong> quanto em <strong className="text-gray-900 font-bold">dinheiro</strong>
        </>
      ),
    },
    {
      icon: "⏳",
      text: (
        <>
          Já até pensou em usar milhas, mas sempre <strong className="text-gray-900 font-bold">deixou pra depois</strong> porque parece "complicado demais"
        </>
      ),
    },
    {
      icon: "📱",
      text: (
        <>
          Está em outros <strong className="text-gray-900 font-bold">grupos de alertas</strong>, mas quase nunca aparece algo bom saindo de <strong className="text-gray-900 font-bold">Brasília</strong>
        </>
      ),
    },
    {
      icon: "💸",
      text: (
        <>
          E, no fim, acaba pagando <strong className="text-gray-900 font-bold">mais caro do que gostaria pra viajar</strong>
        </>
      ),
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gray-50">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#246BCE]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F79824]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#246BCE] font-bold tracking-wider uppercase text-sm mb-3 block">Será que é para você?</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight max-w-3xl mx-auto !leading-tight">
            Se você chegou até aqui, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F79824] to-[#ffb157]">provavelmente:</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Coluna da Imagem */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#246BCE] to-[#F79824] rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-xl overflow-hidden aspect-square md:aspect-[4/5]">
                {/* 
                  Substitua o src abaixo pelo nome da imagem que você fez o upload.
                  Exemplo: "/images/nova-imagem.png"
                */}
                <img 
                  src="/images/mudaressejogo.webp" 
                  alt="Mudar esse jogo - Flores pelo Mundo" 
                  className="w-full h-full object-cover rounded-2xl brightness-95 group-hover:brightness-100 transition-all duration-500 transform group-hover:scale-105" 
                />
              </div>
            </div>
          </motion.div>

          {/* Coluna dos Textos e Pontos */}
          <div className="w-full lg:w-7/12 space-y-5">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start gap-5 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-blue-50 transition-all">
                  {point.icon}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed pt-1">
                  {point.text}
                </p>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-8"
            >
              <a 
                href="#planos"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#3A8D2F] to-[#2E7325] text-white font-bold text-xl py-5 px-10 rounded-full shadow-lg shadow-green-900/20 hover:shadow-green-900/40 transition-all transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative text-2xl group-hover:animate-bounce">✈️</span> 
                <span className="relative">QUERO MUDAR ESSE JOGO!</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IfYouGotHere;
