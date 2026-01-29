
import React from 'react';

const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M100 20C100 80 120 100 180 100C120 100 100 120 100 180C100 120 80 100 20 100C80 100 100 80 100 20Z" 
      fill="#f383f7" 
    />
  </svg>
);

const tools = [
  "Illustrator",
  "Photoshop",
  "Figma",
  "Canva",
  "Capcut",
  "Html",
  "Css",
  "Javascript"
];

export const Tools: React.FC = () => {
  return (
    <section id="herramientas" className="relative py-16 border-t border-gray-100 dark:border-gray-900 transition-colors scroll-mt-20 overflow-hidden">
      {/* Estrellas decorativas de fondo */}
      <Star className="absolute right-[-20px] top-40 w-56 opacity-[0.08] dark:opacity-[0.1] rotate-0 pointer-events-none" />
      <Star className="absolute left-[10%] bottom-20 w-32 opacity-[0.05] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="bg-gray-50/50 dark:bg-gray-900/20 py-10 mb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-base font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Herramientas</h2>
            <div className="w-12 h-[2px] bg-gray-200 dark:bg-gray-800 transition-colors"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {tools.map((tool) => (
              <div 
                key={tool} 
                className="flex items-center space-x-4 group"
              >
                <div className="w-2 h-2 rounded-full bg-[#f383f7] opacity-60 group-hover:scale-150 transition-transform"></div>
                <span className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 transition-colors">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
