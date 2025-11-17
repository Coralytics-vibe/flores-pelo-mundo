import React from 'react';

// A generic map pin icon
const MapPinIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 13a3 3 0 100-6 3 3 0 000 6z" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DestinationItem: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
  <div className="flex items-center text-white/80 whitespace-nowrap px-10">
    {icon}
    <span className="text-2xl font-medium ml-4">{name}</span>
  </div>
);

const Companies: React.FC = () => {
  const destinations = [
    { name: 'Rio de Janeiro', icon: <MapPinIcon /> },
    { name: 'Paris', icon: <MapPinIcon /> },
    { name: 'Fernando de Noronha', icon: <MapPinIcon /> },
    { name: 'Roma', icon: <MapPinIcon /> },
    { name: 'Nova York', icon: <MapPinIcon /> },
    { name: 'Buenos Aires', icon: <MapPinIcon /> },
    { name: 'Tóquio', icon: <MapPinIcon /> },
    { name: 'Lisboa', icon: <MapPinIcon /> },
  ];

  return (
    <div className="bg-[#623CEA]">
      <div className="container mx-auto flex flex-col items-center py-12">
        <p className="text-center text-white/90 font-medium mb-8">
          Com alerta de diversos lugares do Brasil e do Mundo
        </p>
        <div className="w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="flex">
            <div className="flex-shrink-0 flex items-center animate-scroll-left">
              {destinations.map((destination, index) => (
                <DestinationItem key={index} icon={destination.icon} name={destination.name} />
              ))}
            </div>
            <div className="flex-shrink-0 flex items-center animate-scroll-left" aria-hidden="true">
              {destinations.map((destination, index) => (
                <DestinationItem key={index} icon={destination.icon} name={destination.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;