import React, { useState, useEffect } from 'react';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';

const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12C7 9, 17 9, 19 12" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#problema', text: 'Passagens Baratas' },
    { href: '#como-funciona', text: 'Como Funciona' },
    { href: '#depoimentos', text: 'Depoimentos' },
    { href: '#diferenciais', text: 'Vantagens' },
    { href: '#faq', text: 'FAQ' },
    { href: '#sobre', text: 'Sobre' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80; // Approximate header height for correct positioning
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => handleNavClick(e, '#')} className={`flex items-center gap-2 text-xl font-bold transition-colors ${isScrolled ? 'text-[#246BCE]' : 'text-white'}`}>
          <LogoIcon className="w-8 h-8" />
          <span>Flores pelo Mundo</span>
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={`transition-colors font-medium ${isScrolled ? 'text-gray-600 hover:text-[#246BCE]' : 'text-white hover:text-white/80'}`}>
              {link.text}
            </a>
          ))}
        </nav>

        <a href="#problema" onClick={(e) => handleNavClick(e, '#problema')} className="hidden md:inline-block bg-[#F79824] text-white font-bold py-2 px-5 rounded-full hover:bg-[#E88C1A] transition-all shadow-sm hover:shadow-md">
          Saber mais
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white absolute top-full left-0 right-0 shadow-lg`}>
        <div className="flex flex-col items-center space-y-4 p-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => { handleNavClick(e, link.href); setIsOpen(false); }} className="text-gray-600 hover:text-[#4BB3FD] transition-colors font-medium text-lg">
              {link.text}
            </a>
          ))}
          <a href="#problema" onClick={(e) => { handleNavClick(e, '#problema'); setIsOpen(false); }} className="w-full text-center bg-[#F79824] text-white font-bold py-3 px-6 rounded-full hover:bg-[#E88C1A] transition-all">
            Saber mais
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;