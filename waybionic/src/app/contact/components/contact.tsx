"use client";

import { useState } from "react";


/*
note from arwa: full disclosure, i messed w this form to remove fields
that we ultimately didn't need and have not yet tested to see if i broke anything.
i might have. sorry richard.
*/


export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          email,
          message,
        })
      });

      if (!response.ok) {
        const responseText = await response.text().catch(() => "");
        let payload: any = null;
        if (responseText) {
          try {
            payload = JSON.parse(responseText);
          } catch {
            // Non-JSON response; payload remains null.
          }
        }
        console.error("Contact form submission failed", {
          status: response.status,
          statusText: response.statusText,
          body: responseText
        });
        setStatusType("error");
        setStatus(payload?.error || "Something went wrong. Try again.");
        return;
      }

      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");

      setStatusType("success");
      setStatus("Message sent!");
    } catch (error) {
      setStatusType("error");
      setStatus("Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "rgba(243, 238, 255, 0.72)",
    border: "none",
    borderRadius: "12px",
    padding: "18px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    color: "#333",
    boxShadow: "2px 2px 4.1px 0px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-dm-sans), sans-serif",
    fontWeight: 700,
    fontSize: "15px",
    color: "#616161",
    opacity: 0.74,
    marginBottom: "6px",
  };

  return (
    <div className="contact-form-wrapper flex flex-col justify-center w-full px-12 py-16">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* first + last name */}
        <div className="contact-name-row flex gap-4">
          <div className="flex-1">
            <label htmlFor="firstName" style={labelStyle}>first name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" style={labelStyle}>last name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
        </div>

        {/* email */}
        <div>
          <label htmlFor="email" style={labelStyle}>email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        {/* message */}
        <div>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            placeholder="write a message!"
            style={{ ...inputStyle, resize: "none" }}
          />
        </div>

        {/* submit button + status */}
        <div className="contact-submit-row flex items-center justify-end gap-4">
          {status && (
            <p
              aria-live="polite"
              style={{
                margin: 0,
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                color: statusType === "error" ? "#e53e3e" : "#7c6fad",
              }}
            >
              {status}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              backgroundColor: "#B9AFD2",
              color: "white",
              padding: "12px 48px",
              borderRadius: "12px",
              border: "none",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              opacity: isSubmitting ? 0.6 : 1,
              flexShrink: 0,
            }}
          >
            {isSubmitting ? "sending..." : "send message"}
          </button>
        </div>
      </form>
    </div>
  );
}
