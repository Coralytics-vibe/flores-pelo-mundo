
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Testimonials from './components/Testimonials';
import Companies from './components/Companies';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import About from './components/About';
import Footer from './components/Footer';
import FloatingWhatsappButton from './components/FloatingWhatsappButton';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-700">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Testimonials />
        <Companies />
        <HowItWorks />
        <Features />
        <Stats />
        <Pricing />
        <Faq />
        <About />
      </main>
      <Footer />
      <FloatingWhatsappButton />
    </div>
  );
};

export default App;