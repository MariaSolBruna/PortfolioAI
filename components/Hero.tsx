import React, { useState, useEffect } from 'react';

const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M100 20C100 80 120 100 180 100C120 100 100 120 100 180C100 120 80 100 20 100C80 100 100 80 100 20Z" 
      fill="#f383f7" 
    />
  </svg>
);

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const fullText = "HOLA!";

  useEffect(() => {
    const handleType = () => {
      const current = displayText;
      const shouldDelete = isDeleting;

      if (!shouldDelete) {
        setDisplayText(fullText.substring(0, current.length + 1));
        setTypingSpeed(150);
      } else {
        setDisplayText(fullText.substring(0, current.length - 1));
        setTypingSpeed(75);
      }

      if (!shouldDelete && current === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (shouldDelete && current === "") {
        setIsDeleting(false);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* 2 Estrellas decorativas visibles, quietas y sin rotación */}
      <Star className="absolute top-[20%] left-[15%] w-16 md:w-24 opacity-20 rotate-0" />
      <Star className="absolute bottom-[30%] right-[12%] w-12 md:w-20 opacity-25 rotate-0" />
      
      <div className="relative z-10 max-w-4xl w-full">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 flex items-center justify-center min-h-[1.2em]">
          <span>{displayText}</span>
          <span className="inline-block w-[4px] md:w-[8px] h-[0.8em] bg-gray-900 dark:bg-white ml-2 animate-pulse opacity-70"></span>
        </h1>
        
        <div className="space-y-4">
          <p className="text-xl md:text-2xl font-light text-gray-500 dark:text-gray-400 tracking-wide uppercase">
            Me llamo Maria Sol Bruna
          </p>
          <p className="text-3xl md:text-5xl font-serif italic text-gray-900 dark:text-white transition-colors">
            Diseñadora Gráfica - UX UI
          </p>
        </div>
      </div>
    </section>
  );
};