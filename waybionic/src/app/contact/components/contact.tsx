"use client";

import { useState } from "react";
import Student from "./Student";
import NonStudent from "./NonStudent";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [typeOfContact, setTypeOfContact] = useState("Student");
  const [yearOfStudy, setYearOfStudy] = useState("1st");
  const [fieldOfStudy, setFieldOfStudy] = useState("Electrical Engineering");
  const [clubInfo, setClubInfo] = useState("");
  const [businessInfo, setBusinessInfo] = useState("");
  const [professionInfo, setProfessionInfo] = useState("");
  const [sponsorshipInfo, setSponsorshipInfo] = useState("");
  const [partnershipInfo, setPartnershipInfo] = useState("");
  const [professorInfo, setProfessorInfo] = useState("");
  const [otherInfo, setOtherInfo] = useState("");

  // const hiring: boolean = true;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = `${firstName} ${lastName}`.trim();
    setIsSubmitting(true);
    setStatus("");
    setStatusType("");

    // This is where the contact is being sent
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
          message,
          typeOfContact,
          yearOfStudy,
          fieldOfStudy,
          clubInfo,
          businessInfo,
          professionInfo,
          sponsorshipInfo,
          partnershipInfo,
          professorInfo,
          otherInfo
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
      setTypeOfContact("Student");
      setYearOfStudy("1st");
      setFieldOfStudy("Electrical Engineering");
      setClubInfo("");
      setBusinessInfo("");
      setProfessionInfo("");
      setSponsorshipInfo("");
      setPartnershipInfo("");
      setProfessorInfo("");
      setOtherInfo("");

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
                    htmlFor="typeOfContact"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Type Of Contact
                  </label>
                  <select
                    id="typeOfContact"
                    value={typeOfContact}
                    onChange={(e) => (setTypeOfContact(e.target.value))}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                  >
                    <option value="Student" className="text-gray-700 mb-2">Student</option>
                    <option value="Club" className="text-gray-700 mb-2">Club</option>
                    <option value="Business" className="text-gray-700 mb-2">Business</option>
                    <option value="Industry Professional" className="text-gray-700 mb-2">Industry Professional</option>
                    <option value="Professor" className="text-gray-700 mb-2">Professor</option>
                    <option value="Partnership" className="text-gray-700 mb-2">Partnership</option>
                    <option value="Sponsorship" className="text-gray-700 mb-2">Sponsorship</option>
                    <option value="Other" className="text-gray-700 mb-2">Other</option>
                  </select>
                </div>

                {typeOfContact === "Student" ? (<Student yearOfStudy={yearOfStudy} setYearOfStudy={setYearOfStudy} fieldOfStudy={fieldOfStudy} setFieldOfStudy={setFieldOfStudy} />) : (<></>)}

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

                {typeOfContact === "Student" ? (
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Please leave your student message
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
                ) : ((typeOfContact !== "Student" && typeOfContact) ? (
                <NonStudent 
                  typeOfContact={typeOfContact} 
                  setClubInfo={setClubInfo} 
                  setBusinessInfo={setBusinessInfo} 
                  setProfessionInfo={setProfessionInfo} 
                  setSponsorshipInfo={setSponsorshipInfo} 
                  setPartnershipInfo={setPartnershipInfo} 
                  clubInfo={clubInfo} 
                  businessInfo={businessInfo} 
                  professionInfo={professionInfo} 
                  sponsorshipInfo={sponsorshipInfo} 
                  partnershipInfo={partnershipInfo} 
                  otherInfo={otherInfo} 
                  setOtherInfo={setOtherInfo}
                  professorInfo={professorInfo}
                  setProfessorInfo={setProfessorInfo}
                />) : (<></>))}

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
                    className={`text-center mt-4 ${statusType === "error" ? "text-red-600" : "text-green-600"
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
