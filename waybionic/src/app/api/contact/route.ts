import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalize(value?: string) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const firstName = normalize(payload.firstName);
  const lastName = normalize(payload.lastName);
  const fullName = normalize(payload.fullName) || `${firstName} ${lastName}`.trim();
  const email = normalize(payload.email);
  const message = normalize(payload.message);

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

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
  const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

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
  const fromAddress = process.env.CONTACT_FROM || `Waybionic Website <${smtpUser}>`;

  const submittedAt = new Date().toISOString();
  const safeName = escapeHtml(fullName || "Website Visitor");
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  const textBody = [
    "New Contact Request",
    "",
    `Name: ${fullName || "Website Visitor"}`,
    `Email: ${email}`,
    `Submitted: ${submittedAt}`,
    "",
    "Message:",
    message
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
            <td style="padding: 6px 0; font-weight: 600;">Email</td>
            <td style="padding: 6px 0;"><a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: 600;">Submitted</td>
            <td style="padding: 6px 0;">${submittedAt}</td>
          </tr>
        </tbody>
      </table>
      <div style="font-weight: 600; margin-bottom: 6px;">Message</div>
      <div style="white-space: pre-wrap; border: 1px solid #e5e7eb; padding: 12px; border-radius: 6px; background: #f9fafb;">
        ${safeMessage}
      </div>
      <p style="margin-top: 16px; font-size: 12px; color: #6b7280;">
        Submitted from the WayBionic website contact form.
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
      subject: `WayBionic Contact from ${fullName || email}`,
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
