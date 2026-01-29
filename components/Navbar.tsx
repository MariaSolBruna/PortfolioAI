import React from 'react';
import { NavItem } from '../types';
// IMPORTANTE: '..' sube un nivel desde /components hacia la raíz, luego entra en /images.
// Cambia 'logo.png' por el nombre y extensión real de tu archivo (ej. logo.svg o logo.jpg)
import logo from '../images/logo.png'; 

const navItems: NavItem[] = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Herramientas', href: '#herramientas' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' },
];

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center group"
        >
          {/* Se añade dark:invert para que el logo negro se vea blanco en modo oscuro */}
          <img 
            src={logo} 
            alt="Studio Logo" 
            className="h-8 md:h-10 w-auto object-contain dark:invert transition-all duration-300 group-hover:opacity-70"
          />
          <span className="text-gray-900 dark:text-white text-xl font-bold ml-2 tracking-tighter uppercase">DESIGNER</span>
        </a>
        
        <div className="flex items-center space-x-6 md:space-x-10">
          <ul className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-[11px] md:text-[13px] uppercase tracking-[0.15em] font-semibold text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:scale-110 active:scale-95 transition-all duration-200 border border-gray-100 dark:border-gray-800"
            aria-label="Alternar modo oscuro"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591-1.591M12 18.75a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};