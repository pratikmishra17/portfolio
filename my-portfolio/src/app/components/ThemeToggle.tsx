"use client";

import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'; // Import sun and moon icons from react-icons

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={`
        inline-flex items-center justify-center p-2 rounded-full 
        ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}
        shadow-lg transition-all duration-300 ease-in-out 
        focus:outline-none focus:ring-2 focus:ring-blue-100
        text-sm
      `}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Sun and Moon icons with smaller size */}
      {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};
