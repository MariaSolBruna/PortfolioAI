
import React from 'react';

const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M100 20C100 80 120 100 180 100C120 100 100 120 100 180C100 120 80 100 20 100C80 100 100 80 100 20Z" 
      fill="#f383f7" 
    />
  </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

/**
 * Para subir tu foto:
 * 1. Ve a la carpeta 'images' en la raíz de tu proyecto.
 * 2. Guarda tu foto como 'perfil.png' (preferentemente sin fondo).
 */
const getProfileImage = () => {
  try {
    return new URL('../images/perfil.png', import.meta.url).href;
  } catch (e) {
    return "";
  }
};

export const About: React.FC = () => {
  const profileImage = getProfileImage();

  return (
    <section id="sobre-mi" className="relative py-8 border-t border-gray-100 dark:border-gray-900 transition-colors scroll-mt-20 overflow-hidden">
      {/* Estrella Fondo Izquierda - Opacidad corregida a 0.1 */}
      <Star className="absolute -left-24 bottom-10 w-64 md:w-80 opacity-[0.1] dark:opacity-[0.1] rotate-0 pointer-events-none" />
      
      {/* Estrella Fondo Derecha - Opacidad corregida a 0.1 */}
      <Star className="absolute right-[-40px] top-20 w-48 opacity-[0.1] dark:opacity-[0.1] rotate-0 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="bg-gray-50/50 dark:bg-gray-900/20 py-2 mb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-base font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Sobre mí</h2>
            <div className="w-12 h-[2px] bg-gray-200 dark:bg-gray-800 transition-colors"></div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative flex justify-center pt-4">
            {/* Contenedor violeta */}
            <div className="w-64 h-80 md:w-72 md:h-96 bg-[#f2b0f5] rounded-[3.5rem] relative shadow-lg overflow-hidden flex items-end justify-center">
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt="Maria Sol Bruna"
                  className="w-full h-full object-contain object-bottom transition-transform duration-500 translate-y-16 scale-110 hover:scale-115 z-10"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xs font-bold uppercase tracking-widest text-center px-4">
                  Coloca perfil.png en la carpeta images
                </div>
              )}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Estrella Decorativa Marco - AHORA TAMBIÉN CON OPACIDAD 0.1 */}
            <Star className="absolute -bottom-4 -right-2 w-12 h-12 z-20 opacity-[0.1] dark:opacity-[0.1]" />
          </div>
          
          <div className="flex flex-col justify-center space-y-6 text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed transition-colors max-w-lg mx-auto md:mx-0">
            <p className="text-gray-900 dark:text-white font-medium text-2xl">
              Diseño Gráfico - UX UI
            </p>
            <p>
              Soy una diseñadora enfocada en crear soluciones visuales claras, funcionales y con identidad. Me interesa comprender cada proyecto en profundidad para aportar no solo desde el diseño, sino también desde la estrategia y la comunicación.
            </p>
            <p>
              Soy responsable, creativa y autodidacta. Valoro el trabajo en equipo y la colaboración como parte fundamental de cada proyecto.
            </p>
            
            <div className="flex items-center space-x-2 pt-4 group">
              <LocationIcon className="w-5 h-5 text-[#f383f7] transition-all" />
              <span className="text-base font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                Buenos Aires, Argentina
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};