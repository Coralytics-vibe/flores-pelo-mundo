
import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { PlaneIcon } from './icons/PlaneIcon';
import { UsersIcon } from './icons/UsersIcon';
import { TagIcon } from './icons/TagIcon';
import SpotlightCard from './ui/SpotlightCard';

const HowItWorks: React.FC = () => {
  const groups = [
    {
      icon: <WhatsAppIcon className="w-10 h-10" />,
      title: 'Avisos Gerais',
      description: 'Onde centralizamos todas as informações importantes, regras e novidades da comunidade.'
    },
    {
      icon: <PlaneIcon className="w-10 h-10" />,
      title: 'Alertas BSB',
      description: 'Receba promoções de passagens aéreas nacionais e internacionais saindo de Brasília.'
    },
    {
      icon: <PlaneIcon className="w-10 h-10 transform -rotate-45" />,
      title: 'Alertas SP',
      description: 'Focado em voos internacionais, aqui você encontra as melhores oportunidades saindo de São Paulo.'
    },
    {
      icon: <UsersIcon className="w-10 h-10" />,
      title: 'Networking BSB',
      description: 'Conecte-se com outros viajantes, troque dicas, encontre companhias para suas aventuras.'
    },
    {
      icon: <TagIcon className="w-10 h-10" />,
      title: 'Balcão de Milhas',
      description: 'Um espaço exclusivo para comprar e vender milhas e passagens com segurança entre os membros.'
    }
  ];

  const CardContent: React.FC<{group: typeof groups[0], iconColorClass: string}> = ({ group, iconColorClass }) => (
    <>
      <div className={`mb-4 ${iconColorClass}`}>{group.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{group.title}</h3>
      <p className="text-gray-400 flex-grow">{group.description}</p>
    </>
  );

  return (
    <section id="como-funciona" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Como Funciona a Nossa Comunidade</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mt-4">
            Organizamos tudo em 5 grupos de WhatsApp para você ter acesso fácil e rápido apenas ao que te interessa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 md:col-span-2"> 
            <SpotlightCard className="p-8 h-full flex flex-col" spotlightColor="rgba(247, 152, 36, 0.15)">
              <CardContent group={groups[0]} iconColorClass="text-[#F79824]" />
            </SpotlightCard>
          </div>
           {groups.slice(1).map((group, index) => (
            <SpotlightCard key={index} className="p-8 h-full flex flex-col" spotlightColor="rgba(75, 179, 253, 0.1)">
               <CardContent group={group} iconColorClass="text-[#4BB3FD]" />
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
