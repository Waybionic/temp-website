"use client"; // ← Must be the first line
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  // State to toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-[var(--color-pink)]"
      style={{ height: "var(--navbar-height)" }}
    >
      <div className="flex items-center justify-between px-10 py-4 h-full">
        {/* Left side: purple square (logo placeholder) */}
        <div className="w-8 h-8 bg-purple-600" />

        {/* Hamburger Button (visible on small screens) */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {/* Simple Hamburger Icon (3 bars) */}
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              /* X icon (when menu is open) */
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L12 
                  10.586l6.293-6.293a1 1 0 111.414 
                  1.414L13.414 12l6.293 
                  6.293a1 1 0 01-1.414 
                  1.414L12 13.414l-6.293 
                  6.293a1 1 0 01-1.414-1.414L10.586 
                  12 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              /* 3-bar icon (when menu is closed) */
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 110 
                  2H4a1 1 0 110-2zm0 
                  6h16a1 1 0 110 2H4a1 1 0 
                  110-2zm0 6h16a1 1 0 110 
                  2H4a1 1 0 110-2z"
              />
            )}
          </svg>
        </button>

        {/* Right side: nav links (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about">
            <span
              className="text-2xl hover:text-gray-200 transition"
              style={{ color: "var(--color-dark-purple)" }}
            >
              <b>About</b>
            </span>
          </Link>
          <Link href="#contact">
            <span
              className="text-2xl hover:text-gray-200 transition"
              style={{ color: "var(--color-dark-purple)" }}
            >
              <b>Contact</b>
            </span>
          </Link>
          <Link href="#join">
            <span
              className="text-2xl hover:text-gray-200 transition"
              style={{ color: "var(--color-dark-purple)" }}
            >
              <b>Join</b>
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (shown when isOpen = true) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start space-y-4 px-4 pt-4 pb-4 bg-white rounded-b-xl animate-fade-in">
          <Link href="#about" onClick={() => setIsOpen(false)}>
            <span
              className="text-2xl hover:text-gray-200 transition"
              style={{ color: "var(--color-dark-purple)" }}
            >
              <b>About</b>
            </span>
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            <span
              className="text-2xl hover:text-gray-200 transition"
              style={{ color: "var(--color-dark-purple)" }}
            >
              <b>Contact</b>
            </span>
          </Link>
          <Link href="#join" onClick={() => setIsOpen(false)}>
            <span
              className="text-2xl hover:text-gray-200 transition"
              style={{ color: "var(--color-dark-purple)" }}
            >
              <b>Join</b>
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
