"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Start with undefined to prevent hydration mismatch
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    // If theme exists in localStorage, use it
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    } 
    // Otherwise check system preference
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    // Only update the DOM after theme is initialized
    if (theme) {
      // Update the document class when theme changes
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Save to localStorage
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Only render children after theme is determined to avoid hydration issues
  return (
    <ThemeContext.Provider value={{ theme: theme || 'light', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};