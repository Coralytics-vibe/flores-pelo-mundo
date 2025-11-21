
import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { PlaneIcon } from './icons/PlaneIcon';

// A simple Instagram Icon component
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center justify-center md:justify-start gap-2 text-xl font-bold text-white">
              <PlaneIcon className="w-6 h-6 transform -rotate-45" />
              <span>Flores pelo Mundo</span>
            </a>
            <p className="text-gray-400 mt-2">Transformando sonhos de viagem em realidade.</p>
          </div>
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h4 className="font-bold mb-2">Links Úteis</h4>
            <a href="#" className="text-gray-300 hover:text-[#F79824] transition-colors">Termos e Condições</a>
            <a href="#" className="text-gray-300 hover:text-[#F79824] transition-colors">Política de Privacidade</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://api.whatsapp.com/send?phone=5561998936193&text=Oi!%20Quero%20tirar%20d%C3%BAvidas%20sobre%20a%20comunidade%20%F0%9F%92%90Flores%20pelo%20mundo%20%F0%9F%8C%8E!" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="WhatsApp de Suporte">
              <WhatsAppIcon className="w-8 h-8" />
            </a>
            <a href="https://instagram.com/florespelomundo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
              <InstagramIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Flores pelo Mundo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
