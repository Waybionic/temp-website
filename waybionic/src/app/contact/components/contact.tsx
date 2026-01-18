"use client";

import { Yesteryear } from "next/font/google";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Student from "./Student";
import NonStudent from "./NonStudent";
import toast, { Toaster } from 'react-hot-toast';

const serviceIDEmail = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateIDEmail = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKeyEmail = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [typeOfContact, setTypeOfContact] = useState("Student");
  const [yearOfStudy, setYearOfStudy] = useState("1st");
  const [fieldOfStudy, setFieldOfStudy] = useState("Electrical Engineering");
  const [clubInfo, setClubInfo] = useState("");
  const [businessInfo, setBusinessInfo] = useState("");
  const [professionInfo, setProfessionInfo] = useState("");
  const [sponsershipInfo, setSponsershipInfo] = useState("");
  const [partnershipInfo, setPartnershipInfo] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const link: string =
    "https://docs.google.com/forms/d/e/1FAIpQLSfh3q89PTxHesr0P7nelygxXIYYP24kRp_27Yb5mSbyxfiJCQ/viewform?usp=header";

  const hiring: boolean = true;

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    const fullInfo = `${firstName} ${lastName} - ${typeOfContact}${typeOfContact === "Student" ? (` - ${yearOfStudy} Year - ${fieldOfStudy} (Field Of Study / Field of Interest)`) : ``}`;

    let messageDirect;

    switch (typeOfContact) {
      case "Business":
        messageDirect = businessInfo;
        break;
      case "Club":
        messageDirect = clubInfo;
        break;
      case "Industry Professional":
        messageDirect = professionInfo;
        break;
      case "Professor":
        messageDirect = professionInfo;
        break;
      case "Partnership":
        messageDirect = partnershipInfo;
        break;
      case "Sponsorship":
        messageDirect = sponsershipInfo;
        break;
      case "Other":
        messageDirect = otherInfo;
        break;
      case "Student":
      default:
        messageDirect = message;
        break;
    }

    try {

      console.log("about to send", { serviceIDEmail, templateIDEmail });

      await emailjs.send(
        serviceIDEmail,
        templateIDEmail,
        {
          email,
          firstName,
          lastName,
          fullInfo,
          messageDirect,
          subject
        },
        publicKeyEmail
      );

      setStatus("Email sent successfully!");
      toast.success("Message sent successfully!");
      console.log("pass");
    } catch (error) {

      console.log("fail");
      toast.error("Error sending message!");
      setStatus("Auto email failed to send successfully - opening application...");
      const mailtoLink = `mailto:waybionics@gmail.com?subject=${encodeURIComponent(
        (`${subject} - ${fullInfo}`) || "Contact Form Submission"
      )}&body=${encodeURIComponent(messageDirect)}%0D%0A%0D%0AFrom: ${encodeURIComponent(
        fullInfo
      )} (${encodeURIComponent(email)})`;

      window.location.href = mailtoLink;
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
    setSponsershipInfo("");
    setPartnershipInfo("");
    setOtherInfo("");
  };

  return (
    <>
      <Toaster position="top-center" />
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
                  ) : <></>}
                  {(typeOfContact !== "Student" && typeOfContact) ? (<NonStudent typeOfContact={typeOfContact} setClubInfo={setClubInfo} setBusinessInfo={setBusinessInfo} setProfessionInfo={setProfessionInfo} setSponsershipInfo={setSponsershipInfo} setPartnershipInfo={setPartnershipInfo} clubInfo={clubInfo} businessInfo={businessInfo} professionInfo={professionInfo} sponsershipInfo={sponsershipInfo} partnershipInfo={partnershipInfo} otherInfo={otherInfo} message={message} setMessage={setMessage} setOtherInfo={setOtherInfo} />) : (<></>)}

                  <button
                    type="submit"
                    style={{ backgroundColor: "var(--color-pink)" }}
                    className="w-full text-white py-3 px-6 rounded-md hover:opacity-90 transition-colors cursor-pointer"
                  >
                    Send Message
                  </button>
                  {status && (
                    <p className="text-green-600 text-center mt-4">{status}</p>
                  )}
                </form>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
