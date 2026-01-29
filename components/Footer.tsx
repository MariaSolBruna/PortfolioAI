
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-[#0a0a0a] transition-colors border-t border-gray-50 dark:border-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs md:text-sm text-gray-400 dark:text-gray-500 font-light tracking-wide leading-relaxed">
          © 2026 Maria Sol Bruna · Desarrollado con asistencia de IA · Código personalizado y ajustado manualmente.
        </p>
      </div>
    </footer>
  );
};
