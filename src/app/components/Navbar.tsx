"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Mahnoor Javaid</h1>
          
          {/* Hamburger Button */}
          <button 
            className="lg:hidden block"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="/experience" className="hover:text-gray-300">Experience</Link></li>
            <li><Link href="/projects" className="hover:text-gray-300">Projects</Link></li>
            <li><Link href="/skills" className="hover:text-gray-300">Skills</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="pt-4 space-y-2">
            <li><Link href="/" className="block hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="block hover:text-gray-300">About</Link></li>
            <li><Link href="/experience" className="block hover:text-gray-300">Experience</Link></li>
            <li><Link href="/projects" className="block hover:text-gray-300">Projects</Link></li>
            <li><Link href="/skills" className="block hover:text-gray-300">Skills</Link></li>
            <li><Link href="/contact" className="block hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
