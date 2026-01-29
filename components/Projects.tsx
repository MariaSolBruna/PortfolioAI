import React, { useState, useEffect } from 'react';
import { Project } from '../types';

const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M100 20C100 80 120 100 180 100C120 100 100 120 100 180C100 120 80 100 20 100C80 100 100 80 100 20Z" 
      fill="#f383f7" 
    />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const getImagePath = (subfolder: string, fileName: string) => {
  try {
    return new URL(`../images/ImagenesPortfolio/${subfolder}/${fileName}`, import.meta.url).href;
  } catch (e) {
    console.error("No se pudo resolver la ruta de la imagen:", fileName);
    return "";
  }
};

const projects: Project[] = [
  { 
    id: 5, 
    title: "UI/UX Case Study · Plataforma educativa", 
    category: "Diseño UX UI", 
    layout: 'sheet',
    imageUrl: getImagePath("Aprendia", "logo.png"),
    description: "Proyecto de diseño de una aplicación educativa orientada a centralizar la experiencia académica del estudiante, mejorando el acceso a la información y la comunicación en un entorno claro y fácil de usar.",
    gallery: [
      getImagePath("Aprendia", "1.png"),
      getImagePath("Aprendia", "2.png"),
      getImagePath("Aprendia", "3.png"),
      getImagePath("Aprendia", "4.png"),
      getImagePath("Aprendia", "5.png"),
      getImagePath("Aprendia", "6.png"),
      getImagePath("Aprendia", "7.png"),
      getImagePath("Aprendia", "10.png"),
      getImagePath("Aprendia", "11.png"),
      getImagePath("Aprendia", "12.png"),
      getImagePath("Aprendia", "14.png"),
      getImagePath("Aprendia", "8.png"),
      getImagePath("Aprendia", "9.png"),
      getImagePath("Aprendia", "13.png"),
      getImagePath("Aprendia", "16.png"),
      getImagePath("Aprendia", "17.png"),
      getImagePath("Aprendia", "18.png"),
      getImagePath("Aprendia", "19.png"),
      getImagePath("Aprendia", "20.png"),
      getImagePath("Aprendia", "21.png"),
      getImagePath("Aprendia", "22.png"),
      getImagePath("Aprendia", "23.png"),
      getImagePath("Aprendia", "24.png"),
      getImagePath("Aprendia", "25.png"),
      getImagePath("Aprendia", "26.png"),
      getImagePath("Aprendia", "27.png"),
      getImagePath("Aprendia", "28.png"),
      getImagePath("Aprendia", "39.png"),
      getImagePath("Aprendia", "30.png"),
      getImagePath("Aprendia", "31.png"),
      getImagePath("Aprendia", "32.png"),
      getImagePath("Aprendia", "33.png"),
      getImagePath("Aprendia", "34.png"),
      getImagePath("Aprendia", "35.png"),
      getImagePath("Aprendia", "36.png"),
      getImagePath("Aprendia", "37.png"),
      getImagePath("Aprendia", "38.png"),
    ]
  },
   { 
    id: 3, 
    title: "Packaging", 
    category: "Diseño Gráfico", 
    imageUrl: getImagePath("Maxtech", "1.png"),
    description: "Diseño de etiquetas para empaques de insumos industriales, priorizando claridad, legibilidad y correcta jerarquía de la información técnica.",
    gallery: [
      getImagePath("Maxtech", "2.png"),
      getImagePath("Maxtech", "3.png"),
    ]
  },
  { 
    id: 2, 
    title: "Rediseño de identidad · Volantes", 
    category: "Diseño Gráfico", 
    imageUrl: getImagePath("Protesika", "3.png"),
    description: "Rediseño del logo y del volante institucional para un laboratorio dental, con el objetivo de actualizar su imagen visual y mejorar la claridad del mensaje.",
    gallery: [
      getImagePath("Protesika", "1.jpg"),
       getImagePath("Protesika", "2.jpg"),
    ]
  },
  { 
    id: 4, 
    title: "Identidad visual · Logo y papelería", 
    category: "Diseño Gráfico", 
    imageUrl: getImagePath("HidraulicaVial", "Mockup.jpg"),
    description: "Diseño de identidad visual para una empresa dedicada a la reparación, mantenimiento y fabricación de componentes hidráulicos para maquinaria vial, de construcción y agroindustrial. El trabajo incluyó el diseño del logo y su aplicación en tarjetas personales y volantes doble faz",
    gallery: [
      getImagePath("HidraulicaVial", "1.jpg"),
      getImagePath("HidraulicaVial", "2.jpg"),
      getImagePath("HidraulicaVial", "Volante-01.jpg"),
      getImagePath("HidraulicaVial", "Volante-02.jpg"),
    ]
  },
  { 
    id: 1, 
    title: "Tarjetas personales", 
    category: "Diseño Gráfico", 
    imageUrl: getImagePath("Dietetica", "portadaDietetica.png"),
    description: "Diseño de tarjetas personales doble faz para una dietética, respetando la identidad visual de la marca y priorizando claridad, legibilidad y correcta jerarquía de la información.",
    gallery: [
      getImagePath("Dietetica", "2.png"),
      getImagePath("Dietetica", "3.jpg"),
    ]
  },
   { 
    id: 9, 
    title: "Identidad visual", 
    category: "Diseño Gráfico", 
    imageUrl: getImagePath("Hambach", "logo.png"),
    description: "Diseño de logo e identidad visual para un taller mecánico especializado en Mercedes-Benz y Smart. El trabajo incluyó el desarrollo de historias destacadas para Instagram, alineadas con la identidad de marca, priorizando coherencia visual, claridad del mensaje y reconocimiento en entornos digitales.",
    gallery: [
      getImagePath("Hambach", "auto.jpg"),
      getImagePath("Hambach", "cartel.jpg"),
      getImagePath("Hambach", "frente.jpg"),
      getImagePath("Hambach", "historias.png"),
    ]
  },
   { 
    id: 6, 
    title: "Ejercicio de Branding", 
    category: "Diseño Gráfico", 
    imageUrl: getImagePath("Kenetsu", "Logo.png"),
    description: "Creación de identidad visual y menú para un local de sushi conceptual, inspirado en el libro Fahrenheit 451 Ray Bradbury, aplicando una estética narrativa y una paleta cromática acorde al universo de la obra.",
    gallery: [
      getImagePath("Kenetsu", "Publicaciones.png"),
      getImagePath("Kenetsu", "Varias.png"),
      getImagePath("Kenetsu", "Menu.png"),
      getImagePath("Kenetsu", "Historia.png"),
    ]
  },
   { 
    id: 11, 
    title: "Identidad visual", 
    category: "Diseño Gráfico", 
    layout: 'sheet',
    imageUrl: getImagePath("KoalitaIce", "FondoBlanco2.png"),
    description: "Imagotipo e Isotipo - Paleta de colores - Tipografías - Personalidad de la marca - Mockups.",
    gallery: [
      getImagePath("KoalitaIce", "1.png"),
    ]
  },
   { 
    id: 8, 
    title: "Flyer publicitario", 
    category: "Diseño Gráfico", 
    imageUrl: getImagePath("CustomClub", "portada.png"),
    description: "Diseño de flyer digital para evento temático de motos custom. Creación de logo y paleta de colores. Utilización de fuente tipográfica en consonancia con el estilo del evento.",
    gallery: [
      getImagePath("CustomClub", "1.png"),
    ]
  },
  { 
    id: 10, 
    title: "Secuencias", 
    category: "Diseño Gráfico", 
    imageUrl: getImagePath("Morfologia", "1.png"),
    description: "Secuencias de composiciones inspirado en una profesión (mecánico de motos), explorando diferentes texturas y elementos. En la primer imagen de cada composición se dejan ver elementos que formarán parte de su imagen siguiente.",
    gallery: [
      getImagePath("Morfologia", "1.png"),
      getImagePath("Morfologia", "2.png"),
      getImagePath("Morfologia", "3.png"),
      getImagePath("Morfologia", "4.png"),
      getImagePath("Morfologia", "5.png"),
      getImagePath("Morfologia", "6.png"),
    ]
  },
];

const ProjectImage: React.FC<{ src: string, alt: string, onError: () => void, layout?: 'grid' | 'sheet' }> = ({ src, alt, onError, layout }) => {
  if (layout === 'sheet') {
    return (
      <img 
        src={src} 
        alt={alt}
        onError={onError}
        className="block w-full h-auto transition-opacity duration-500 ease-out"
      />
    );
  }

  return (
    <div className="flex justify-center w-full">
      <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 shadow-sm inline-block group">
        <img 
          src={src} 
          alt={alt}
          onError={onError}
          className="block w-auto max-w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.03] max-h-[70vh]"
        />
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="trabajos" className="relative py-24 border-t border-gray-100 dark:border-gray-900 transition-colors scroll-mt-20 overflow-hidden">
      <Star className="absolute -right-32 top-20 w-80 md:w-[450px] opacity-[0.1] dark:opacity-[0.1] rotate-0 pointer-events-none" />
      <Star className="absolute -left-20 bottom-40 w-48 md:w-64 opacity-[0.1] dark:opacity-[0.1] rotate-0 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="bg-gray-50/50 dark:bg-gray-900/20 py-2 mb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-base font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Trabajos seleccionados</h2>
            <div className="w-12 h-[2px] bg-gray-200 dark:bg-gray-800 transition-colors"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group project-card relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-gray-900 mb-6 aspect-[3/2] transition-colors relative z-20 shadow-sm border border-gray-50 dark:border-gray-800">
                {!imageErrors[`p-${project.id}`] ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    onError={() => handleImageError(`p-${project.id}`)}
                    className="w-full h-full object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 dark:opacity-80 group-hover:dark:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 text-center">
                    <Star className="w-12 h-12 mb-4 opacity-10" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f383f7] mb-2">Archivo no encontrado</p>
                  </div>
                )}
              </div>
              <div className="px-2 relative z-20">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">{project.category}</p>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white transition-colors tracking-tight">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL MULTI-LAYOUT */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-white/80 dark:bg-black/95 backdrop-blur-lg transition-opacity"></div>
          
          <div 
            className="relative bg-white dark:bg-[#0c0c0c] w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur text-gray-500 hover:text-black dark:hover:text-white transition-all z-40 border border-gray-100 dark:border-gray-800 shadow-sm"
            >
              <CloseIcon />
            </button>

            <div className="p-8 md:p-16">
              <div className="max-w-5xl mx-auto text-center mb-14">
                <p className="text-[#f383f7] font-bold uppercase tracking-[0.4em] mb-3 text-[10px]">{selectedProject.category}</p>
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-6 tracking-wide italic font-serif">
                  {selectedProject.title}
                </h2>
                <p className="text-base md:text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-4xl mx-auto">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.layout === 'sheet' ? (
                /* LAYOUT ESPECIAL: SÁBANA (Sheet) */
                <div className="w-[95%] mx-auto overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl flex flex-col bg-gray-50 dark:bg-gray-900/20">
                  {selectedProject.gallery?.map((img, idx) => (
                    <div key={idx} className="w-full">
                      {!imageErrors[`g-${selectedProject.id}-${idx}`] ? (
                        <ProjectImage 
                          src={img} 
                          alt={`${selectedProject.title} - ${idx + 1}`}
                          onError={() => handleImageError(`g-${selectedProject.id}-${idx}`)}
                          layout="sheet"
                        />
                      ) : (
                        <div className="w-full bg-gray-50 dark:bg-gray-900/50 p-20 text-center">
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Contenido no disponible</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                /* LAYOUT ESTÁNDAR: GRILLA */
                <div className={`grid gap-8 md:gap-12 items-center justify-center max-w-5xl mx-auto ${
                  selectedProject.gallery && selectedProject.gallery.length > 1 
                  ? 'grid-cols-1 md:grid-cols-2' 
                  : 'grid-cols-1'
                }`}>
                  {selectedProject.gallery?.map((img, idx) => (
                    <div key={idx} className="w-full flex justify-center">
                      {!imageErrors[`g-${selectedProject.id}-${idx}`] ? (
                        <ProjectImage 
                          src={img} 
                          alt={`${selectedProject.title} - ${idx + 1}`}
                          onError={() => handleImageError(`g-${selectedProject.id}-${idx}`)}
                        />
                      ) : (
                        <div className="w-full aspect-video flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-6 text-center border border-dashed border-gray-200 dark:border-gray-800">
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Archivo no disponible</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-20 text-center">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold uppercase tracking-[0.25em] text-[10px] hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  Volver a Trabajos
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};