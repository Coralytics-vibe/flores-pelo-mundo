import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  return (
    <section id="problema" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left Column - Visual Chat Mockup (WhatsApp style) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#0B141A] rounded-3xl shadow-2xl overflow-hidden border-[6px] border-gray-900 relative mx-auto w-full max-w-sm h-auto flex flex-col"
          style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')", backgroundBlendMode: 'overlay', backgroundColor: 'rgba(11, 20, 26, 0.95)' }}
        >
          {/* WhatsApp Header */}
          <div className="bg-[#202C33] p-3 flex items-center gap-3 shadow-md z-10 shrink-0 border-b border-gray-800">
            <div className="w-10 h-10 bg-[#00A884] rounded-full flex items-center justify-center overflow-hidden shrink-0">
              <span className="text-white font-bold text-sm">FM</span>
            </div>
            <div>
              <h3 className="text-white font-semibold text-[15px] leading-tight">Alertas BSB ✈️</h3>
              <p className="text-gray-400 text-[11px] mt-0.5">toque para dados do grupo</p>
            </div>
          </div>

          {/* WhatsApp Chat Area */}
          <div className="flex-1 p-3 space-y-4 pt-4 pb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, originY: 1, originX: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#202C33] rounded-lg rounded-tl-none p-2 w-fit max-w-[92%] shadow-sm relative ml-2"
            >
              {/* Chat tail */}
              <div className="absolute top-0 left-[-8px] w-0 h-0 border-t-[10px] border-t-[#202C33] border-l-[10px] border-l-transparent"></div>

              <div className="text-[#53BDEB] text-[13px] font-bold mb-1.5 flex items-center justify-between gap-6 px-1">
                <span>+55 61 9999-9999</span>
                <span className="text-gray-400 text-[10px] font-normal">~ Admin FPM</span>
              </div>

              {/* Placeholder for top image (screenshot of flight search) */}
              <div className="w-[100%] h-36 bg-gray-200 rounded flex items-center justify-center mb-2 overflow-hidden mx-auto">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="Exemplo de Busca" />
              </div>

              <div className="text-white text-[13.5px] leading-snug font-sans pb-3 px-1 space-y-1">
                <p className="font-bold">❄️ FÉRIAS DE JULHO</p>
                <p className="font-bold pb-2">🗣️ Brasília - Montevidéu 🇺🇾</p>

                <p>🗓️ Ida: 30/JUN/2026</p>
                <p>🗓️ Volta: 10/JUL/2026</p>
                <p>🌽 Milhas: A partir de <strong>33.000 o trecho</strong> + taxa</p>
                <p>✈️ Voando: GOL</p>
                <p>📌 Emissão: Smiles</p>
                <p>💺 Cabine: <strong>Econômica</strong></p>
                <p className="pt-1">🔗 Link para a passagem:</p>
                <a href="#" className="text-blue-400 underline break-all inline-block hover:text-blue-300">https://link-da-passagem</a>

                <p className="pt-2">🤝 Valor para <strong>emissão no balcão</strong> (ida e volta): <strong>R$ 1.056,00 a R$ 1.188,00</strong> + taxa</p>

                <p className="pt-2">⚠️ Valor especial <strong>pra você, membro do FPM!</strong></p>

                <p className="pt-2">🔗 <a href="https://florespelomundo.com" className="text-blue-400 underline hover:text-blue-300">florespelomundo.com</a> 💐 🌍</p>
              </div>

              <div className="absolute right-2 bottom-1 text-right text-[10px] text-gray-400">
                14:05
              </div>
            </motion.div>
          </div>

          {/* WhatsApp Input area */}
          <div className="bg-[#202C33] p-2 flex items-center justify-center shrink-0 border-t border-gray-800">
            <div className="bg-[#2A3942] rounded-full w-[95%] py-2 text-center text-gray-400 text-[13px]">
              Somente admins enviam mensagens
            </div>
          </div>
        </motion.div>

        {/* Right Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 !leading-tight">
            A comunidade de viagens Flores pelo Mundo te entrega as <span className="text-[#246BCE]">passagens mais baratas</span> que você já viu.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            Enquanto você ainda paga caro para viajar, <strong className="font-bold text-gray-900">mais de 1.800 viajantes</strong> já foram transformados pela nossa comunidade e descobriram que dá pra <strong className="font-bold text-gray-900 uppercase">VOAR MUITO MAIS</strong>, gastando bem menos.
          </p>
          <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
            E o melhor: você nem precisa procurar nada, tudo chega na palma da sua mão!
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Problem;
