
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problema" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column - Visual Chat Mockup (inspired by user screenshot) */}
        <div className="bg-[#1C1C1E] rounded-2xl shadow-2xl p-6 border border-gray-700/50">
            {/* Header */}
            <div className="flex items-center gap-3">
              <img src="https://picsum.photos/id/43/40/40" alt="June Chen" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold text-white">June Chen</p>
                <p className="text-sm text-gray-400">Designer at Acme Ventures</p>
              </div>
            </div>

            {/* Messages */}
            <div className="mt-8 space-y-4">
              <div className="p-3 rounded-xl bg-[#1E3A5F] text-white w-fit max-w-[85%] rounded-bl-sm">
                <p className="text-sm">I just saw Perry's question on the latest presentation. Here's an updated copy! 💪</p>
              </div>

              <div className="py-2 px-3 rounded-lg bg-[#2C2C2E] w-fit max-w-[85%] flex items-center gap-3 border border-white/10">
                <div className="bg-red-500 text-white font-bold text-xs p-2 rounded">PDF</div>
                <p className="text-white text-sm">March Customer Strategy</p>
              </div>

              <div className="flex justify-end">
                <div className="p-3 rounded-xl bg-[#2A3B4F] text-white w-fit max-w-[85%] rounded-br-sm">
                  <p className="text-sm">This looks great. I think we're good to send it over to the client! ✅</p>
                </div>
              </div>
              
              <div className="p-3 rounded-xl bg-[#3A255A] text-white w-fit max-w-[85%] rounded-bl-sm">
                <p className="text-sm">Perfect! Sending it over. ✨</p>
              </div>
            </div>

            {/* Reply Box */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-gray-400 text-sm">
              <span>To: June</span>
              <div className="flex items-center gap-4 text-gray-500">
                 <span className='font-mono text-lg'>{`{ }`}</span>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
              </div>
            </div>
             <div className="mt-2 rounded-lg border border-white/20 p-3 text-gray-400 flex justify-between items-center hover:border-white transition-colors cursor-pointer">
                <p>Reply All</p>
                <span className="font-mono text-xl">&gt;</span>
            </div>
          </div>

        {/* Right Column - Text */}
        <div className="text-left">
           <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 !leading-tight">
                A comunidade de viagens Flores pelo Mundo te entrega as <span className="text-[#246BCE]">passagens mais baratas</span> que você já viu.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                Enquanto você ainda paga caro para viajar, <strong className="font-bold text-gray-900">mais de 1.800 viajantes</strong> já foram transformados pela nossa comunidade e descobriram que dá pra <strong className="font-bold text-gray-900 uppercase">VOAR MUITO MAIS</strong>, gastando bem menos.
            </p>
             <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
                E o melhor: você nem precisa procurar nada, tudo chega na palma da sua mão!
            </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
