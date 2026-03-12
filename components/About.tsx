
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#246BCE]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-[#F79824]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image Column */}
          <div className="w-full lg:w-5/12">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#246BCE] rounded-[2rem] rotate-3 transform transition-transform group-hover:rotate-6 opacity-20"></div>
              <img
                src="/images/20231015_170209-1-1536x2048.webp"
                alt="Camila Flores"
                className="relative w-full h-auto object-cover rounded-[2rem] shadow-2xl transform transition-transform group-hover:-translate-y-2 duration-500"
                style={{ maxHeight: '600px' }}
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="bg-[#F79824]/10 p-2 rounded-full">
                    <svg className="w-6 h-6 text-[#F79824]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Desde</p>
                    <p className="text-lg font-bold text-gray-900">2008</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-7/12">
            <span className="text-[#246BCE] font-semibold tracking-wider uppercase text-sm mb-2 block">Quem eu sou</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 !leading-tight">
              Oiê! Muito prazer, eu sou a <span className="text-[#246BCE]">Camila Flores</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Estou imersa nesse mundo incrível das milhas desde 2008! Durante muito tempo, o foco de tudo que eu aprendia era só pra aproveitar com minha família mesmo.
              </p>
              <p>
                Mas, em janeiro de 2023, depois de entrar em um grupo de alertas de passagens e ver que era quase caótico encontrar alguma coisa saindo de Brasília, decidi criar o primeiro grupo de alertas com saída exclusivamente do nosso quadrado, que já se tornou referência no assunto e já virou uma comunidade com 5 grupos!
              </p>
              <p>
                Curiosa que sou, adoro 'fuçar' os sites e encontrar passagens baratas, como você pôde ver um pouquinho nos exemplos que eu dei lá em cima!
              </p>

              <div className="bg-[#F79824]/10 border-l-4 border-[#F79824] p-6 rounded-r-lg my-8">
                <p className="text-gray-800 font-medium italic">
                  "Posso te garantir que na comunidade você vai se surpreender ainda mais com tudo que vai receber! Prepare-se para TRANSFORMAR de uma vez por todas sua maneira de viajar!"
                </p>
              </div>

              <p className="font-bold text-gray-900 text-xl">
                TE VEJO LÁ!
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#planos"
                className="inline-flex items-center justify-center bg-[#246BCE] text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-[#1D56A5] transition-all transform hover:scale-105 shadow-lg hover:shadow-[#246BCE]/30"
              >
                Quero fazer parte
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
