import nodemailer from "nodemailer";
import type { ContactFormPayload } from "./contact-schema";

export type ContactSubmission = Omit<ContactFormPayload, "website">;

const issueLabels: Record<ContactSubmission["issue"], string> = {
  crevaison: "Crevaison",
  batterie: "Batterie",
  demarrage: "Ne démarre pas",
  essence: "Panne d'essence",
  selle: "Selle bloquée",
  remorquage: "Remorquage",
  autre: "Autre",
};

function smtpConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendContactEmail(payload: ContactSubmission): Promise<boolean> {
  const to = process.env.CONTACT_EMAIL;
  if (!to || !smtpConfigured()) return false;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const text = [
    "Nouvelle demande de rappel — DépannageScooter",
    "",
    `Téléphone : ${payload.phone}`,
    `Localisation : ${payload.location}`,
    `Type de panne : ${issueLabels[payload.issue]}`,
  ].join("\n");

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject: `[Rappel] ${issueLabels[payload.issue]} — ${payload.phone}`,
    text,
  });

  return true;
}

export async function sendContactWebhook(payload: ContactSubmission): Promise<boolean> {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return false;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "depannagescooter-contact",
      phone: payload.phone,
      location: payload.location,
      issue: payload.issue,
      issueLabel: issueLabels[payload.issue],
      at: new Date().toISOString(),
    }),
  });

  return response.ok;
}
