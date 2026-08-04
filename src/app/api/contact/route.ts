import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";
import { sendContactEmail, sendContactWebhook } from "@/lib/email";
import { clientIp, isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides", details: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { website, ...payload } = parsed.data;

  if (website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const ip = clientIp(request);
  const rateKey = `${process.env.CONTACT_RATE_LIMIT_SECRET ?? "default"}:${ip}`;
  if (isRateLimited(rateKey)) {
    return NextResponse.json(
      { error: "Trop de demandes. Réessayez dans une heure ou appelez-nous." },
      { status: 429 },
    );
  }

  const [emailSent, webhookSent] = await Promise.all([
    sendContactEmail(payload),
    sendContactWebhook(payload),
  ]);

  if (!emailSent && !webhookSent) {
    return NextResponse.json(
      {
        error:
          "Service temporairement indisponible. Appelez le 07 72 12 53 11 pour une intervention immédiate.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
