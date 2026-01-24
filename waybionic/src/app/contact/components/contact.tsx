"use client";

import { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const link: string =
  "https://docs.google.com/forms/d/e/1FAIpQLSfh3q89PTxHesr0P7nelygxXIYYP24kRp_27Yb5mSbyxfiJCQ/viewform?usp=header";

const hiring: boolean = true;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = `${firstName} ${lastName}`.trim();
    setIsSubmitting(true);
    setStatus("");
    setStatusType("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName,
          lastName,
          fullName,
          subject,
          email,
          message
        })
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setStatusType("error");
        setStatus(payload?.error || "Something went wrong. Please try again.");
        return;
      }

      setFirstName("");
      setLastName("");
      setSubject("");
      setEmail("");
      setMessage("");
      setStatusType("success");
      setStatus(
        "Thanks for reaching out. Your message is on its way to the Waybionic team."
      );
    } catch (error) {
      setStatusType("error");
      setStatus("Unable to send right now. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
        className="relative w-full flex items-center justify-center overflow-hidden bg-no-repeat bg-cover bg-top py-16 -mt-90 sm:-mt-110 md:-mt-100 lg:-mt-100 xl:-mt-50"

      style={{
        backgroundImage: "url('/images/contact_middle_bg.PNG')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      id="contact"
    >
      <div className="min-h-screen flex flex-col w-full">
        <main className="flex-1 container mx-auto px-4 py-16" style={{ marginTop: '-60px' }}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Subject of email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Type your message here..."
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: "var(--color-pink)" }}
                  disabled={isSubmitting}
                  className="w-full text-white py-3 px-6 rounded-md hover:opacity-90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {status && (
                  <p
                    className={`text-center mt-4 ${
                      statusType === "error" ? "text-red-600" : "text-green-600"
                    }`}
                    aria-live="polite"
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
