import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Tools } from './components/Tools';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      // Por defecto cargamos modo claro (false) a menos que haya una preferencia guardada explícitamente como 'dark'
      return saved === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen selection:bg-gray-200 dark:selection:bg-gray-800 selection:text-black dark:selection:text-white transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Tools />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;