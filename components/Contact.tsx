
import React from 'react';

const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M100 20C100 80 120 100 180 100C120 100 100 120 100 180C100 120 80 100 20 100C80 100 100 80 100 20Z" 
      fill="#f383f7" 
    />
  </svg>
);

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="relative py-32 border-t border-gray-100 dark:border-gray-900 transition-colors scroll-mt-20 overflow-hidden">
      {/* Estrellas decorativas de fondo */}
      <Star className="absolute right-0 bottom-[-50px] w-48 opacity-[0.15] rotate-0 pointer-events-none" />
      <Star className="absolute left-[-20px] top-10 w-32 opacity-[0.1] rotate-0 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="bg-gray-50/50 dark:bg-gray-900/20 py-10 mb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-base font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Contacto</h2>
            <div className="w-12 h-[2px] bg-gray-200 dark:bg-gray-800 transition-colors"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="w-full max-w-2xl">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors leading-tight">
              ¿Hablamos de tu próximo proyecto?
            </h3>
            <p className="text-xl md:text-2xl font-light text-gray-500 dark:text-gray-400 leading-relaxed">
              Me motiva colaborar en propuestas creativas y nuevos desafíos.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 md:text-right flex-shrink-0">
            <a 
              href="mailto:solbruna5@gmail.com" 
              className="text-sm font-bold text-gray-900 dark:text-gray-100 hover:text-[#f383f7] transition-all tracking-widest"
            >
              GMAIL
            </a>
            <a 
              href="https://linkedin.com/in/maria-sol-bruna" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-bold text-gray-900 dark:text-gray-100 hover:text-[#f383f7] transition-all tracking-widest"
            >
              LINKEDIN
            </a>
            <a 
              href="/CVdesigner_SolBruna" 
              download
              className="text-sm font-bold text-[#f383f7] hover:opacity-70 transition-all tracking-widest border-t md:border-t-0 pt-4 md:pt-0 border-gray-100 dark:border-gray-900"
            >
              DESCARGAR CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
