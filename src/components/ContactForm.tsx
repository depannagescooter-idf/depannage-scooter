"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { company } from "@/data/company";
import { trackFormSubmit } from "@/lib/analytics";
import type { ContactFormPayload } from "@/lib/contact-schema";

export function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: ContactFormPayload = {
      phone: String(formData.get("phone") ?? ""),
      location: String(formData.get("location") ?? ""),
      issue: String(formData.get("issue") ?? "") as ContactFormPayload["issue"],
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok) {
        setError(data.error ?? "Une erreur est survenue. Réessayez ou appelez-nous.");
        return;
      }

      trackFormSubmit();
      router.push("/contact/merci/");
    } catch {
      setError("Connexion impossible. Appelez le 07 72 12 53 11.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="card space-y-4 px-5 py-6" onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-asphalte">
          Téléphone *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="mt-1 w-full rounded-lg border border-border px-4 py-3 font-data tabular-nums focus:border-gyro focus:outline-none focus:ring-2 focus:ring-gyro/20"
          placeholder="06 12 34 56 78"
        />
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-asphalte">
          Localisation *
        </label>
        <input
          id="location"
          name="location"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-border px-4 py-3 focus:border-gyro focus:outline-none focus:ring-2 focus:ring-gyro/20"
          placeholder="Adresse ou point de repère"
        />
      </div>
      <div>
        <label htmlFor="issue" className="block text-sm font-medium text-asphalte">
          Type de panne *
        </label>
        <select
          id="issue"
          name="issue"
          required
          className="mt-1 w-full rounded-lg border border-border px-4 py-3 focus:border-gyro focus:outline-none focus:ring-2 focus:ring-gyro/20"
        >
          <option value="">Choisir…</option>
          <option value="crevaison">Crevaison</option>
          <option value="batterie">Batterie</option>
          <option value="demarrage">Ne démarre pas</option>
          <option value="essence">Panne d&apos;essence</option>
          <option value="selle">Selle bloquée</option>
          <option value="remorquage">Remorquage</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      {error ? <p className="text-sm text-alerte">{error}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full rounded-full py-3 font-display font-semibold text-white disabled:opacity-60"
      >
        {loading ? "Envoi…" : "Demander un rappel"}
      </button>
      <p className="text-center text-xs text-beton">
        Urgence ? Appelez directement le{" "}
        <a
          href={`tel:${company.phone}`}
          data-track-origin="inline"
          data-track-event="call_click"
          className="font-data text-signal"
        >
          {company.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
