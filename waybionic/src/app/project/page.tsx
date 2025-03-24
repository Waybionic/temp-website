"use client";

import Image from "next/image";

export default function Project() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2">
          <Image
            src="/waybionic-logo.png"
            alt="Waybionic logo"
            width={60}
            height={60}
          />
          <span className="text-xl font-semibold">Waybionic</span>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li><a href="/" className="hover:text-gray-600">Home</a></li>
            <li><a href="/project" className="hover:text-gray-600">Project</a></li>
            <li><a href="/team" className="hover:text-gray-600">The Team</a></li>
            <li><a href="/contact" className="hover:text-gray-600">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Project</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Our club is dedicated to developing a bionic arm for remote surgical applications, inspired by Dr. Sun's research on addressing medical emergencies, like collapsed lungs, in space. Her work explored performing surgeries from Earth via bionic arms to assist astronauts in orbit without needing an onboard doctor.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Currently, we are focused on creating and refining the arm for surgical use, with plans to eventually test in space-simulated conditions once we secure the necessary equipment and funding.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            We appreciate your interest in our club!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t p-8">
        <div className="container mx-auto flex justify-center gap-6">
          <a
            href="https://www.instagram.com/waybionics/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/waybionic/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="mailto:waybionics@gmail.com"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
} 