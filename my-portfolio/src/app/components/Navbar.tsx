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
    <nav className="relative w-full z-20 border-b-0 bg-gradient-to-b from-sky-200 to-sky-100">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo on the Left */}
        <Link href="/" className="text-gray-700 font-bold hover:text-gray-900 ">
          PM
        </Link>

        {/* Centered Menu Items with Theme Toggle */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="#about" className="underline-link text-gray-700 hover:text-gray-900">About</Link>
          <Link href="#skills" className="underline-link text-gray-700 hover:text-gray-900">Skills</Link>
          <Link href="#education" className="underline-link text-gray-700 hover:text-gray-900">Education</Link>
          <Link href="#experience" className="underline-link text-gray-700 hover:text-gray-900">Experience</Link>
          <Link href="#footer" className="underline-link text-gray-700 hover:text-gray-900">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-b from-blue-50 to-blue-50 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <Link href="#about" className="text-gray-900 hover:text-blue-700" onClick={handleMenuClick}>About</Link>
            <Link href="#skills" className="text-gray-900 hover:text-blue-700" onClick={handleMenuClick}>Skills</Link>
            <Link href="#education" className="text-gray-900 hover:text-blue-700" onClick={handleMenuClick}>Education</Link>
            <Link href="#experience" className="text-gray-900 hover:text-blue-700" onClick={handleMenuClick}>Experience</Link>
            <Link href="#contact" className="text-gray-900 hover:text-blue-700" onClick={handleMenuClick}>Contact</Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
