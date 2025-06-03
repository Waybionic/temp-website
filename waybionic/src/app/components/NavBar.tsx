"use client"; // ← Must be at the top
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const pages = [
  { name: "About", href: "/about" },
  { name: "Our Team", href: "/about#team" },
  { name: "Contact Us", href: "/contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-[var(--color-pink)] pt-[env(safe-area-inset-top)]"
      style={{ height: "var(--navbar-height)" }}
    >
      <div className="relative flex items-center justify-between px-4 py-4 h-full">
        {/* Hamburger Button (visible on small screens) */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
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

        {/* Logo and Brand Name */}
        <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="object-contain"
            />
            <span
              className="text-2xl font-bold hidden md:block"
              style={{
                color: "var(--color-dark-purple)",
                fontFamily: "LemonMilk, sans-serif",
              }}
            >
              Waybionic
            </span>
          </a>
        </div>

        {/* Desktop Nav Links (visible on md and up) */}
        <div className="hidden md:flex items-center space-x-10 mr-20">
          {pages.map((page) => (
            <Link href={page.href} key={page.name}>
              <span
                className="text-2xl hover:text-gray-200 transition"
                style={{ color: "var(--color-dark-purple)" }}
              >
                <b>{page.name}</b>
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu (shown when isOpen = true) */}
      <div
        className={`md:hidden fixed left-0 right-0 top-[var(--navbar-height)] z-40 flex flex-col items-start space-y-4 px-6 pt-6 pb-6 bg-[var(--color-pink)] rounded-b-xl transition-all duration-500 ${
          isOpen
            ? "animate-fade-in opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ width: "100vw" }}
      >
        {pages.map((page) => (
          <Link
            href={page.href}
            key={page.name}
            onClick={() => setIsOpen(false)}
          >
            <span
              className="text-2xl hover:text-gray-200 transition"
              style={{ color: "var(--color-dark-purple)" }}
            >
              <b>{page.name}</b>
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
