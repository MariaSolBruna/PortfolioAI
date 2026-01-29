
import React from 'react';

const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M100 20C100 80 120 100 180 100C120 100 100 120 100 180C100 120 80 100 20 100C80 100 100 80 100 20Z" 
      fill="#f383f7" 
    />
  </svg>
);

interface ExperienceItem {
  title: string;
  location?: string;
  description: string[];
  date: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Diseñadora de Contenido Visual para Redes Sociales",
    location: "Fundación Argentina Libre de Corrupción",
    date: "2025 - Actualidad",
    description: [
      "Diseño de piezas gráficas para Instagram y LinkedIn",
      "Adaptación del contenido visual a la identidad institucional",
      "Trabajo en conjunto con el equipo de Comunicación"
    ]
  },
  {
    title: "Diseñadora Freelance",
    date: "2025 - Actualidad",
    description: [
      "Diseño de ilustraciones personalizadas",
      "Preparación de archivos para impresión en DTF",
      "Trabajo en conjunto con el equipo de Comunicación"
    ]
  },
  {
    title: "Diseñadora Gráfica",
    location: "Grafistore",
    date: "2024 - 2025",
    description: [
      "Diseño de piezas gráficas para impresión offset y digital",
      "Manejo de software de diseño",
      "Colaboración con el equipo de trabajo para asegurar tiempos y entregas",
      "Tareas de pre y post impresión"
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="relative py-16 border-t border-gray-100 dark:border-gray-900 transition-colors scroll-mt-20 overflow-hidden">
      {/* Estrellas decorativas */}
      <Star className="absolute left-[-40px] top-20 w-48 opacity-[0.08] dark:opacity-[0.1] rotate-0 pointer-events-none" />
      <Star className="absolute right-[-20px] bottom-40 w-64 opacity-[0.05] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="bg-gray-50/50 dark:bg-gray-900/20 py-10 mb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-base font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Experiencia laboral</h2>
            <div className="w-12 h-[2px] bg-gray-200 dark:bg-gray-800 transition-colors"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="relative border-l-2 border-gray-900 dark:border-gray-100 ml-4 md:ml-0">
            {experiences.map((exp, index) => (
              <div key={index} className="group mb-12 last:mb-0 relative pl-8 md:pl-12">
                {/* Punto en la línea de tiempo que reacciona al hover del grupo */}
                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[#f383f7] border-4 border-[#fcfcfc] dark:border-[#0a0a0a] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(243,131,247,0.5)] z-20"></div>
                
                {/* Contenedor con efecto de iluminación al pasar el mouse */}
                <div className="relative p-6 md:p-8 rounded-[2rem] transition-all duration-500 hover:bg-white dark:hover:bg-white/[0.03] hover:shadow-xl hover:shadow-black/[0.02] dark:hover:shadow-none border border-transparent hover:border-gray-50 dark:hover:border-white/5">
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm font-bold text-[#f383f7] uppercase tracking-widest">
                      {exp.date}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white transition-colors">
                      {exp.title}
                    </h3>
                    {exp.location && (
                      <p className="text-lg font-medium text-gray-500 dark:text-gray-400 italic">
                        {exp.location}
                      </p>
                    )}
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 font-light leading-relaxed flex items-start">
                          <span className="mr-2 mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
