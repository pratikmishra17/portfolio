"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close menu on item click
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

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
        <div className="md:hidden bg-white dark:bg-gray-900">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <Link href="#about" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500" onClick={handleMenuClick}>About</Link>
            <Link href="#experience" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500" onClick={handleMenuClick}>Experience</Link>
            <Link href="#skills" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500" onClick={handleMenuClick}>Skills</Link>
            <Link href="#projects" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500" onClick={handleMenuClick}>Projects</Link>
            <Link href="#contact" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500" onClick={handleMenuClick}>Contact</Link>
            <Link href="/resume.pdf" target="_blank" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500" onClick={handleMenuClick}>Resume</Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
