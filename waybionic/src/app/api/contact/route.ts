import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// Gets all the information from the form, and puts it in a payload
type ContactPayload = {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  subject?: string;
  email?: string;
  message?: string;
  typeOfContact?: string;
  yearOfStudy?: string;
  fieldOfStudy?: string;
  clubInfo?: string;
  businessInfo?: string;
  professionInfo?: string;
  sponsorshipInfo?: string;
  partnershipInfo?: string;
  professorInfo?: string;
  otherInfo?: string;
};

// Regex for checking email
const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Remove standard characters w/ internet characters so that it appears normal in the email
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Removes leading and trailing spaces
function normalize(value?: string) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  // NOTE: This endpoint currently has no rate limiting or abuse prevention.
  // Consider implementing rate limiting (e.g., by IP address) or CAPTCHA
  // protection before deploying to production to prevent spam attacks.
  
  // creates an instance of ContactPayload
  let payload: ContactPayload;

  // Next.js AI route, read the incoming HTTP body as JSON and convert to ContactPayload
  try {
    payload = (await request.json()) as ContactPayload;
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }

  // Getting the values from the form
  const firstName = normalize(payload.firstName);
  const lastName = normalize(payload.lastName);
  const fullName = normalize(payload.fullName) || `${firstName} ${lastName}`.trim();
  const subject = normalize(payload.subject);
  const email = normalize(payload.email);
  const message = normalize(payload.message);
  const typeOfContact = normalize(payload.typeOfContact);
  const yearOfStudy = normalize(payload.yearOfStudy);
  const fieldOfStudy = normalize(payload.fieldOfStudy);
  const clubInfo = normalize(payload.clubInfo);
  const businessInfo = normalize(payload.businessInfo);
  const professionInfo = normalize(payload.professionInfo);
  const sponsorshipInfo = normalize(payload.sponsorshipInfo);
  const partnershipInfo = normalize(payload.partnershipInfo);
  const professorInfo = normalize(payload.professorInfo);
  const otherInfo = normalize(payload.otherInfo);

  // Error checking / form parsing

  if (!firstName || !lastName || !subject || !email) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  // Maximum length validation
  const maxLengths = {
    firstName: 100,
    lastName: 100,
    subject: 200,
    email: 254,
    message: 5000,
    info: 5000
  };

  if (firstName.length > maxLengths.firstName || lastName.length > maxLengths.lastName) {
    return NextResponse.json(
      { error: "Name is too long." },
      { status: 400 }
    );
  }

  if (subject.length > maxLengths.subject) {
    return NextResponse.json(
      { error: "Subject is too long." },
      { status: 400 }
    );
  }

  if (email.length > maxLengths.email) {
    return NextResponse.json(
      { error: "Email is too long." },
      { status: 400 }
    );
  }

  if (message.length > maxLengths.message) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 }
    );
  }

  if (typeOfContact === "Student" && (!yearOfStudy || !fieldOfStudy || !message)) {
    return NextResponse.json(
      { error: "Please complete all required student fields." },
      { status: 400 }
    );
  }

  // Error filtering for non-student
  const rules: Record<string, { value: string | null | undefined; error: string }> = {
    "Club": { value: clubInfo, error: "Please complete all required club fields." },
    "Business": { value: businessInfo, error: "Please complete all required business fields." },
    "Industry Professional": { value: professionInfo, error: "Please complete all required profession fields." },
    "Sponsorship": { value: sponsorshipInfo, error: "Please complete all required sponsorship fields." },
    "Partnership": { value: partnershipInfo, error: "Please complete all required partnership fields." },
    "Professor": { value: professorInfo, error: "Please complete all required professor fields." },
    "Other": { value: otherInfo, error: "Please complete all fields." }
  };

  if (typeOfContact !== "Student" && rules[typeOfContact]) {
    const { value, error } = rules[typeOfContact];

    if (value == null || value.trim() === "") {
      return NextResponse.json({ error }, { status: 400 });
    }

    if (value.length > maxLengths.info) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }
  }


  /// Email error filtering
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || "");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecureEnv = process.env.SMTP_SECURE;
  const smtpSecure =
    smtpSecureEnv != null
      ? smtpSecureEnv === "true"
      : smtpPort === 465;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.error("Contact email missing SMTP config.", {
      hasHost: Boolean(smtpHost),
      hasPort: Number.isFinite(smtpPort) && smtpPort > 0,
      hasUser: Boolean(smtpUser),
      hasPass: Boolean(smtpPass)
    });
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 }
    );
  }

  const toAddress = process.env.CONTACT_TO || "waybionics@gmail.com";
  const fromAddress =
    process.env.CONTACT_FROM || `Waybionic Website <${smtpUser}>`;

  const submittedAt = new Date().toISOString();
  const safeName = escapeHtml(fullName || "Website Visitor");
  const safeSubject = escapeHtml(subject);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const safeClubInfo = escapeHtml(clubInfo);
  const safeBusinessInfo = escapeHtml(businessInfo);
  const safeProfessionInfo = escapeHtml(professionInfo);
  const safeSponsorshipInfo = escapeHtml(sponsorshipInfo);
  const safePartnershipInfo = escapeHtml(partnershipInfo);
  const safeProfessorInfo = escapeHtml(professorInfo);
  const safeOtherInfo = escapeHtml(otherInfo);

  const messageLinksHtml: Record<string, string> = {
    "Student": safeMessage,
    "Club": safeClubInfo,
    "Business": safeBusinessInfo,
    "Industry Professional": safeProfessionInfo,
    "Professor": safeProfessorInfo,
    "Partnership": safePartnershipInfo,
    "Sponsorship": safeSponsorshipInfo,
    "Other": safeOtherInfo
  };

  const messageLinksText: Record<string, string> = {
    "Student": message,
    "Club": clubInfo,
    "Business": businessInfo,
    "Industry Professional": professionInfo,
    "Professor": professorInfo,
    "Partnership": partnershipInfo,
    "Sponsorship": sponsorshipInfo,
    "Other": otherInfo
  };

  const messageBodyHtml = messageLinksHtml[typeOfContact] || safeMessage;
  const messageBodyText = messageLinksText[typeOfContact] || message;

  const textBody = [
    "New Contact Request",
    "",
    `Name: ${fullName || "Website Visitor"}`,
    `Type of Contact: ${typeOfContact}`,
    ...(typeOfContact === "Student" ? [`Year: ${yearOfStudy}`, `Field of Study: ${fieldOfStudy}`] : []),
    `Email: ${email}`,
    `Subject: ${subject}`,
    `Submitted: ${submittedAt}`,
    "",
    "Message:",
    messageBodyText
  ].join("\n");

  const htmlBody = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #111827; line-height: 1.6;">
      <h2 style="margin: 0 0 12px;">New Contact Request</h2>
      <table style="border-collapse: collapse; width: 100%; margin-bottom: 16px;">
        <tbody>
          <tr>
            <td style="padding: 6px 0; font-weight: 600; width: 110px;">Name</td>
            <td style="padding: 6px 0;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: 600; width: 110px;">Type of Contact</td>
            <td style="padding: 6px 0;">${typeOfContact}</td>
          </tr>
          ${typeOfContact === "Student" ?
      `
          <tr>
            <td style="padding: 6px 0; font-weight: 600; width: 110px;">School Year</td>
            <td style="padding: 6px 0;">${yearOfStudy}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: 600; width: 110px;">Major</td>
            <td style="padding: 6px 0;">${fieldOfStudy}</td>
          </tr>
            ` : ""}
          <tr>
            <td style="padding: 6px 0; font-weight: 600;">Email</td>
            <td style="padding: 6px 0;"><a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: 600;">Subject</td>
            <td style="padding: 6px 0;">${safeSubject}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: 600;">Submitted</td>
            <td style="padding: 6px 0;">${submittedAt}</td>
          </tr>
        </tbody>
      </table>
      <div style="font-weight: 600; margin-bottom: 6px;">Message</div>
      <div style="white-space: pre-wrap; border: 1px solid #e5e7eb; padding: 12px; border-radius: 6px; background: #f9fafb;">
        ${messageBodyHtml}
      </div>
      <p style="margin-top: 16px; font-size: 12px; color: #6b7280;">
        Submitted from the Waybionic website contact form.
      </p>
    </div>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    await transporter.sendMail({
      to: toAddress,
      from: fromAddress,
      replyTo: email,
      subject: `Waybionic Contact: ${subject}`,
      text: textBody,
      html: htmlBody
    });
  } catch (error) {
    const err = error as Error & {
      code?: string;
      responseCode?: number;
      response?: string;
      command?: string;
    };
    console.error("Contact email send failed.", {
      message: err.message,
      code: err.code,
      responseCode: err.responseCode,
      response: err.response,
      command: err.command
    });
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
