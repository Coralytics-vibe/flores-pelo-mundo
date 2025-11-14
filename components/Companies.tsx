
import React from 'react';

// Recreating logos inspired by the image as SVGs
const PowersurgeLogo: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="26" height="20" rx="4" fill="white" fillOpacity="0.2"/>
    <rect x="6" y="9" width="8" height="14" rx="2" fill="white" fillOpacity="0.5"/>
  </svg>
);

const WarpspeedLogo: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 16C6 12.6863 8.68629 10 12 10H26L20 16L26 22H12C8.68629 22 6 19.3137 6 16Z" fill="white" fillOpacity="0.5"/>
  </svg>
);

const LeapyearLogo: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6H8V12H18V8C18 6.89543 17.1046 6 16 6H12Z" fill="white" fillOpacity="0.5"/>
    <path d="M20 26H24V20H14V24C14 25.1046 14.8954 26 16 26H20Z" fill="white" fillOpacity="0.5"/>
  </svg>
);

const EasyTaxLogo: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3ZM16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6V26Z" fill="white" fillOpacity="0.5"/>
  </svg>
);

const SisyphusLogo: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h9l-2 8 10-12h-9l2-8z" fill="white" fillOpacity="0.5" />
  </svg>
);

const CircoolLogo: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16V16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16V16Z" stroke="white" strokeOpacity="0.5" strokeWidth="4"/>
    <path d="M21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16V16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16V16Z" stroke="white" strokeOpacity="0.5" strokeWidth="3"/>
  </svg>
);

const LogoItem: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
  <div className="flex items-center text-white/80 whitespace-nowrap px-10">
    {icon}
    <span className="text-2xl font-medium ml-4">{name}</span>
  </div>
);

const Companies: React.FC = () => {
  const airlines = [
    { name: 'LATAM', logo: <PowersurgeLogo /> },
    { name: 'GOL', logo: <WarpspeedLogo /> },
    { name: 'Azul', logo: <LeapyearLogo /> },
    { name: 'TAP Portugal', logo: <EasyTaxLogo /> },
    { name: 'Copa Airlines', logo: <SisyphusLogo /> },
    { name: 'Air France', logo: <CircoolLogo /> },
  ];

  return (
    <div className="bg-[#623CEA]">
      <div className="container mx-auto flex flex-col items-center py-12">
        <p className="text-center text-white/90 font-medium mb-8">
          Com alerta de diversas companhias aéreas
        </p>
        <div className="w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="flex">
            <div className="flex-shrink-0 flex items-center animate-scroll-left">
              {airlines.map((airline, index) => (
                <LogoItem key={index} icon={airline.logo} name={airline.name} />
              ))}
            </div>
            <div className="flex-shrink-0 flex items-center animate-scroll-left" aria-hidden="true">
              {airlines.map((airline, index) => (
                <LogoItem key={index} icon={airline.logo} name={airline.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
