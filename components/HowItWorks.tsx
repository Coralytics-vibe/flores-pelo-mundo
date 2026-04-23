
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { PlaneIcon } from './icons/PlaneIcon';
import { UsersIcon } from './icons/UsersIcon';
import { TagIcon } from './icons/TagIcon';
import SpotlightCard from './ui/SpotlightCard';

const VideoModal: React.FC<{ videoId: string | null; onClose: () => void; }> = ({ videoId, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!videoId) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-3xl aspect-video bg-black rounded-lg shadow-2xl" 
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="video-modal-title" className="sr-only">Player de vídeo</h2>
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 text-white bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-2xl z-10 hover:bg-gray-700 transition-colors"
          aria-label="Fechar modal"
        >
          &times;
        </button>
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </motion.div>
    </motion.div>
  );
};


const HowItWorks: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const groups = [
    {
      icon: <PlaneIcon className="w-10 h-10" />,
      title: 'Grupo de alertas BSB',
      description: 'Você recebe as melhores oportunidades saindo de Brasília, na hora certa.',
      videoId: 'Mquj6iqD4OY'
    },
    {
      icon: <PlaneIcon className="w-10 h-10 transform -rotate-45" />,
      title: 'Alertas SP',
      description: 'Também recebe alertas saindo de SP pra fora do país.',
      videoId: 'FBteGEBgW9w'
    },
    {
      icon: <TagIcon className="w-10 h-10" />,
      title: 'Balcão de milhas',
      description: 'Não tem milhas? Sem problema! No grupo do balcão você compra em dinheiro, de forma simples e segura.',
      videoId: 'rfsguHGOMBk'
    },
    {
      icon: <UsersIcon className="w-10 h-10" />,
      title: 'Networking',
      description: 'No networking você tira dúvidas, troca dicas e aprende muito. Uma dica aplicada já paga o acesso!',
      videoId: 'Zt3IiYFMZfM'
    },
    {
      icon: <WhatsAppIcon className="w-10 h-10" />,
      title: 'Avisos',
      description: 'No grupo de Avisos, você fica por dentro das transferências com bônus, promoções de pontos e tudo que faz diferença na sua viagem.',
      videoId: 'C3Pm-Ub3U5o'
    }
  ];

  const CardContent: React.FC<{ group: typeof groups[0], iconColorClass: string, onPlay: (videoId: string) => void }> = ({ group, iconColorClass, onPlay }) => (
    <>
      <div className={`mb-4 ${iconColorClass}`}>{group.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{group.title}</h3>
      <p className="text-gray-400 flex-grow leading-relaxed">{group.description}</p>
      <button
        onClick={() => onPlay(group.videoId)}
        className="mt-6 w-full bg-white/10 text-white font-semibold py-2 px-4 rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
      >
        Ver Vídeo
      </button>
    </>
  );

  return (
    <>
      <section id="como-funciona" className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <a 
              href="https://www.instagram.com/p/C9S6zg_PLyo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 group-hover:text-[#246BCE] transition-colors leading-tight">
                NÃO SOMOS SÓ MAIS UM <span className="text-[#246BCE]">GRUPO DE ALERTAS...</span>
              </h2>
            </a>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl font-medium text-gray-600 mt-4 leading-relaxed">
              Você entra e passa a ter tudo isso aqui!
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 md:col-span-2"
            >
              <SpotlightCard className="p-8 h-full flex flex-col" spotlightColor="rgba(247, 152, 36, 0.15)">
                <CardContent group={groups[0]} iconColorClass="text-[#F79824]" onPlay={setActiveVideoId} />
              </SpotlightCard>
            </motion.div>
            {groups.slice(1).map((group, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard className="p-8 h-full flex flex-col" spotlightColor="rgba(75, 179, 253, 0.1)">
                  <CardContent group={group} iconColorClass="text-[#4BB3FD]" onPlay={setActiveVideoId} />
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a 
              href="#planos" 
              className="inline-flex items-center justify-center bg-[#F79824] text-white font-bold text-xl py-5 px-12 rounded-full hover:bg-[#E88C1A] transition-all transform hover:scale-105 shadow-xl hover:shadow-[#F79824]/30"
            >
              Quero ter acesso a tudo isso!
            </a>
          </motion.div>
        </div>
      </section>
      <VideoModal videoId={activeVideoId} onClose={() => setActiveVideoId(null)} />
    </>
  );
};

export default HowItWorks;