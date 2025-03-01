"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b-0">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo on the Left */}
        <Link href="/" className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-blue-500">
          PRATIK MISHRA
        </Link>

        {/* Centered Menu Items */}
        <div className="hidden md:flex space-x-8">
        <Link href="#about" className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-blue-500">About</Link>
            <Link href="#experience" className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-blue-500">Experience</Link>
            <Link href="#skills" className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-blue-500">Skills</Link>
            <Link href="#projects" className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-blue-500">Projects</Link>
            <Link href="#contact" className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-blue-500">Contact</Link>
        </div>

        {/* Dark Mode Toggle on the Right */}
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md transition-all"
        >
          {darkMode ? (
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0L7.05 5.63a1 1 0 11-1.42 1.42L4.22 5.63a1 1 0 010-1.41zM2 10a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zM4.22 15.78a1 1 0 011.42 0l1.41 1.41a1 1 0 11-1.42 1.42l-1.41-1.41a1 1 0 010-1.42zM10 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM15.78 4.22a1 1 0 000 1.42l1.41 1.41a1 1 0 101.42-1.42l-1.41-1.41a1 1 0 00-1.42 0zM16 10a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM15.78 15.78a1 1 0 000 1.42l1.41 1.41a1 1 0 101.42-1.42l-1.41-1.41a1 1 0 00-1.42 0z"/>
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-800 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a8 8 0 000 16A8 8 0 0010 2zM8 14a6 6 0 118-8 6 6 0 01-8 8z" clipRule="evenodd"/>
            </svg>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <Link href="#about" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">About</Link>
            <Link href="#experience" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Experience</Link>
            <Link href="#skills" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Skills</Link>
            <Link href="#projects" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Projects</Link>
            <Link href="#contact" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Contact</Link>
            <Link href="/resume.pdf" target="_blank" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Resume</Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
