
import React, { useState, useEffect } from 'react';
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
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] animate-fade-in" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      style={{ animationDuration: '0.3s' }}
    >
      <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
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
      </div>
    </div>
  );
};


const HowItWorks: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const groups = [
    {
      icon: <WhatsAppIcon className="w-10 h-10" />,
      title: 'Avisos Gerais',
      description: 'Onde centralizamos todas as informações importantes, regras e novidades da comunidade.',
      videoId: 'C3Pm-Ub3U5o'
    },
    {
      icon: <PlaneIcon className="w-10 h-10" />,
      title: 'Alertas BSB',
      description: 'Receba promoções de passagens aéreas nacionais e internacionais saindo de Brasília.',
      videoId: 'Mquj6iqD4OY'
    },
    {
      icon: <PlaneIcon className="w-10 h-10 transform -rotate-45" />,
      title: 'Alertas SP',
      description: 'Focado em voos internacionais, aqui você encontra as melhores oportunidades saindo de São Paulo.',
      videoId: 'FBteGEBgW9w'
    },
    {
      icon: <UsersIcon className="w-10 h-10" />,
      title: 'Networking BSB',
      description: 'Conecte-se com outros viajantes, troque dicas, encontre companhias para suas aventuras.',
      videoId: 'Zt3IiYFMZfM'
    },
    {
      icon: <TagIcon className="w-10 h-10" />,
      title: 'Balcão de Milhas',
      description: 'Um espaço exclusivo para comprar e vender milhas e passagens com segurança entre os membros.',
      videoId: 'rfsguHGOMBk'
    }
  ];

  const CardContent: React.FC<{group: typeof groups[0], iconColorClass: string, onPlay: (videoId: string) => void}> = ({ group, iconColorClass, onPlay }) => (
    <>
      <div className={`mb-4 ${iconColorClass}`}>{group.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{group.title}</h3>
      <p className="text-gray-400 flex-grow">{group.description}</p>
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
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Como Funciona a Nossa Comunidade</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mt-4">
              Organizamos tudo em 5 grupos de WhatsApp para você ter acesso fácil e rápido apenas ao que te interessa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 md:col-span-2"> 
              <SpotlightCard className="p-8 h-full flex flex-col" spotlightColor="rgba(247, 152, 36, 0.15)">
                <CardContent group={groups[0]} iconColorClass="text-[#F79824]" onPlay={setActiveVideoId}/>
              </SpotlightCard>
            </div>
            {groups.slice(1).map((group, index) => (
              <SpotlightCard key={index} className="p-8 h-full flex flex-col" spotlightColor="rgba(75, 179, 253, 0.1)">
                <CardContent group={group} iconColorClass="text-[#4BB3FD]" onPlay={setActiveVideoId}/>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
      <VideoModal videoId={activeVideoId} onClose={() => setActiveVideoId(null)} />
    </>
  );
};

export default HowItWorks;