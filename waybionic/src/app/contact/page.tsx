"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with pre-filled subject and body
    const mailtoLink = `mailto:waybionics@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
      message
    )}%0D%0A%0D%0AFrom: ${encodeURIComponent(email)}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    setEmail("");
    setMessage("");
    setStatus("Message opened in your default email client!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-16">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-6 sm:p-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8 text-left">
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              placeholder="Type your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
          >
            Send Message
          </button>
          {status && (
            <p className="text-green-600 text-center mt-4 text-sm">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
