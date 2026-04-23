import React from 'react';
import { motion } from 'framer-motion';

const Guarantee: React.FC = () => {
  return (
    <section className="py-20 bg-[#f4f7f2] relative overflow-hidden">
      {/* Wave-like background shape or just a solid color as per the print */}
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <img 
            src="/images/7diasdegarantia.webp" 
            alt="7 Dias de Garantia" 
            className="mx-auto w-48 md:w-64 drop-shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Entra e vê as oportunidades na prática.
          </h3>
          <p className="text-xl md:text-2xl text-gray-800 mb-2 leading-relaxed">
            Se não fizer sentido pra você, devolvemos seu dinheiro em até <span className="font-extrabold">7 dias.</span>
          </p>
          <p className="text-xl md:text-2xl text-gray-800 font-semibold italic">
            Simples assim. Sem burocracia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <img 
            src="/images/barra-segura2-1-1-1.png" 
            alt="Compra Segura, Satisfação Garantida, Privacidade Protegida" 
            className="mx-auto h-12 md:h-16 opacity-80"
          />
        </motion.div>
      </div>

      {/* Background decoration to match the greenish tone from the print */}
      <div className="absolute inset-0 z-[-1] opacity-20" style={{ backgroundColor: '#9BAF8F' }}></div>
    </section>
  );
};

export default Guarantee;
