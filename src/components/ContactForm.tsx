"use client";

import { useState } from "react";
import { company } from "@/data/company";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="card px-5 py-4 text-alerte">
        Demande enregistrée (mode démo). Branchement email prévu en Phase 6.
      </p>
    );
  }

  return (
    <form
      className="card space-y-4 px-5 py-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
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
      <button type="submit" className="btn-primary w-full rounded-full py-3 font-display font-semibold text-white">
        Demander un rappel
      </button>
      <p className="text-center text-xs text-beton">
        Urgence ? Appelez directement le{" "}
        <a href={`tel:${company.phone}`} className="font-data text-signal">
          {company.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
