import React, { useState, useEffect, useMemo } from 'react';

interface TextRotateProps {
  texts: string[];
  containerClassName?: string;
}

const TextRotate: React.FC<TextRotateProps> = ({ texts, containerClassName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Encontra o texto mais longo para evitar mudanças de layout
  const longestText = useMemo(() => {
    if (!texts || texts.length === 0) return '';
    return texts.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
  }, [texts]);

  useEffect(() => {
    if (texts.length <= 1) return;

    const intervalId = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsExiting(false);
      }, 500); // Duração da animação de saída
    }, 2500); // Tempo entre as rotações

    return () => clearInterval(intervalId);
  }, [texts.length]);

  const currentText = texts[currentIndex] || '';

  return (
    <span className={`relative inline-block overflow-hidden align-bottom ${containerClassName}`}>
      <span className="invisible whitespace-pre">{longestText}</span>
      <span
        key={currentIndex}
        className="absolute left-0 top-0 bottom-0 right-0 flex items-center justify-center whitespace-pre"
      >
        {currentText.split('').map((char, i) => (
          <span
            key={i}
            className={`inline-block ${isExiting ? 'animate-slide-out-up' : 'animate-slide-in-up'}`}
            style={{ animationDuration: '0.5s', animationDelay: `${isExiting ? (currentText.length - i - 1) * 30 : i * 30}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </span>
  );
};

export default TextRotate;