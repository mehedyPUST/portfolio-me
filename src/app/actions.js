'use server';

import nodemailer from "nodemailer";

const REQUIRED_FIELDS = ["name", "email", "subject", "message"];

function getTrimmedValue(formData, key) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getTransport() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
}

export async function sendContactMessage(_, formData) {
  const values = Object.fromEntries(
    REQUIRED_FIELDS.map((field) => [field, getTrimmedValue(formData, field)])
  );

  if (Object.values(values).some((value) => !value)) {
    return {
      status: "error",
      message: "Please fill in your name, email, subject, and message.",
    };
  }

  if (!validateEmail(values.email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  const transporter = getTransport();

  if (!transporter) {
    return {
      status: "error",
      message:
        "Email sending is not configured yet. Add SMTP_USER and SMTP_PASS in your environment to activate the form.",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL || "nafizalam.dev@gmail.com";

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to,
      replyTo: values.email,
      subject: `Portfolio Contact: ${values.subject}`,
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        "",
        values.message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
          <h2 style="margin:0 0 16px">New Portfolio Message</h2>
          <p style="margin:0 0 8px"><strong>Name:</strong> ${values.name}</p>
          <p style="margin:0 0 8px"><strong>Email:</strong> ${values.email}</p>
          <p style="margin:0 0 8px"><strong>Subject:</strong> ${values.subject}</p>
          <p style="margin:16px 0 0"><strong>Message:</strong></p>
          <p style="margin:8px 0 0;white-space:pre-wrap">${values.message}</p>
        </div>
      `,
    });

    return {
      status: "success",
      message: "Message sent successfully. It should arrive in your inbox shortly.",
    };
  } catch (error) {
    console.error("Contact form email failed:", error);

    return {
      status: "error",
      message:
        "The message could not be sent right now. Please try again after checking your mail configuration.",
    };
  }
}
