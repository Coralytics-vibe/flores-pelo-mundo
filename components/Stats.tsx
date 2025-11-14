
import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1a1122, #141c2c, #142327)'}}>
        <div className="container mx-auto px-6 py-24 sm:py-32 relative">
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-50">
                <span className="text-[20rem] sm:text-[28rem] font-black text-white/5 select-none leading-none -mt-8 tracking-tighter">
                    3600
                </span>
            </div>
            <div className="relative z-10">
                <p className="text-4xl sm:text-5xl font-semibold text-center text-white/90 leading-tight max-w-4xl mx-auto">
                    Mais de <span className="text-[#F79824] font-bold">3600 alertas</span> de passagem em 1 ano.
                </p>
            </div>
        </div>
    </section>
  );
};

export default Stats;
