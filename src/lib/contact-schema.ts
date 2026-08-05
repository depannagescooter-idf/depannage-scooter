import { z } from "zod";

export const issueTypes = [
  "crevaison",
  "batterie",
  "demarrage",
  "essence",
  "selle",
  "remorquage",
  "autre",
] as const;

export const issueTypeLabels: Record<(typeof issueTypes)[number], string> = {
  crevaison: "Crevaison",
  batterie: "Batterie",
  demarrage: "Ne démarre pas",
  essence: "Panne d'essence",
  selle: "Selle bloquée",
  remorquage: "Remorquage",
  autre: "Autre",
};

export const contactFormSchema = z.object({
  phone: z
    .string()
    .min(10, "Numéro trop court")
    .max(20, "Numéro trop long")
    .regex(/^[\d\s+().-]+$/, "Format de téléphone invalide"),
  location: z.string().min(3, "Localisation requise").max(500),
  issue: z.enum(issueTypes, { message: "Type de panne requis" }),
  vehicle: z.string().max(120).optional().default(""),
  /** Honeypot — ignoré côté serveur si rempli */
  website: z.string().optional().default(""),
});

export type ContactFormPayload = z.infer<typeof contactFormSchema>;
