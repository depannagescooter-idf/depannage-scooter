import { formatPrice, getDspTotal, pricing } from "@/data/pricing";
import { services } from "@/data/services";
import type { Zone } from "@/data/types";
import { zoneFacts, zoneFactsBase, zoneInsee } from "@/data/zone-facts";
import { zoneVoies } from "@/data/zone-voies";
import { zones } from "@/data/zones";
import { getTravelZoneForZone } from "@/lib/zone-faqs";

export interface FactLink {
  label: string;
  href?: string;
}

export interface FactRow {
  label: string;
  value: string;
  /** Valeur chiffrée : rendue en font-data. */
  numeric?: boolean;
  links?: FactLink[];
}

const integer = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 });
const decimal = new Intl.NumberFormat("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
const slugByInsee = new Map(Object.entries(zoneInsee).map(([slug, code]) => [code, slug]));

function zoneLabel(code: string, officialName: string): FactLink {
  const slug = slugByInsee.get(code);
  const zone = slug ? zones.find((z) => z.slug === slug) : undefined;
  return zone ? { label: zone.name, href: `/zones-intervention/${zone.slug}/` } : { label: officialName };
}

/**
 * Fiche factuelle d'une zone : uniquement des données calculées (OSRM, geo.api.gouv.fr, BAN)
 * ou lues dans la grille tarifaire et les services. Une donnée absente n'est pas affichée.
 */
export function buildZoneFactRows(zone: Zone): FactRow[] {
  const facts = zoneFacts[zone.slug];
  const mairie = zone.kind === "arrondissement" ? "la mairie d'arrondissement" : "la mairie";
  const travel = getTravelZoneForZone(zone);
  const travelLabel = pricing.travelFees[travel].label;
  const rows: FactRow[] = [];

  if (facts?.route) {
    rows.push({
      label: "Distance depuis notre base",
      value: `${decimal.format(facts.route.distanceKm)} km par la route jusqu'à ${mairie}, environ ${facts.route.durationMin} min sans circulation`,
      numeric: true,
    });
  }
  rows.push({
    label: "Délai d'intervention annoncé",
    value: `${zone.etaMinutes[0]} à ${zone.etaMinutes[1]} min`,
    numeric: true,
  });
  rows.push({
    label: "Dépannage sur place",
    value: `${formatPrice(getDspTotal(travel))} TTC déplacement inclus, tarif jour ${travelLabel === "Paris" ? travelLabel : lowerFirst(travelLabel)} ; majorations nuit, week-end et jours fériés en sus`,
    numeric: true,
  });
  if (facts?.population) {
    const surfaceKm2 = facts.surfaceHa ? facts.surfaceHa / 100 : null;
    rows.push({
      label: "Population (INSEE)",
      value: surfaceKm2
        ? `${integer.format(facts.population)} habitants sur ${decimal.format(surfaceKm2)} km², soit ${integer.format(facts.population / surfaceKm2)} hab./km²`
        : `${integer.format(facts.population)} habitants`,
      numeric: true,
    });
  }
  if (facts?.limitrophes?.length) {
    const links = facts.limitrophes.map((l) => zoneLabel(l.code, l.nom));
    const arrondissements = facts.limitrophes.filter((l) => l.code.startsWith("751")).length;
    const label =
      arrondissements === facts.limitrophes.length
        ? "Arrondissements limitrophes"
        : arrondissements === 0
          ? "Communes limitrophes"
          : "Communes et arrondissements limitrophes";
    rows.push({ label, value: links.map((l) => l.label).join(", "), links });
  }
  const voies = zoneVoies[zone.slug] ?? [];
  if (voies.length) {
    rows.push({ label: "Voies vérifiées dans la Base Adresse Nationale", value: voies.join(", ") });
  }
  rows.push({
    label: "Prestations",
    value: `${services.map((s, i) => (i === 0 ? s.name : lowerFirst(s.name))).join(", ")}.`,
  });
  return rows;
}

export function buildZoneFactCaption(zone: Zone): string {
  return `Fiche pratique — ${zone.name}`;
}

/** Mention des sources, affichée sous la fiche. */
export function buildZoneFactSources(zone: Zone): string {
  const facts = zoneFacts[zone.slug];
  const parts = [
    facts?.route && zoneFactsBase ? `itinéraire OSRM depuis ${zoneFactsBase.address}, sans circulation` : null,
    facts?.population || facts?.limitrophes ? "population et limites : geo.api.gouv.fr (INSEE)" : null,
    zoneVoies[zone.slug]?.length ? "voies : Base Adresse Nationale" : null,
    "tarifs : grille DépannageScooter",
  ].filter(Boolean);
  const date = facts ? ` Calculé le ${facts.computedOn.split("-").reverse().join("/")}.` : "";
  return `Sources : ${parts.join(" ; ")}.${date}`;
}

/** Texte de la fiche tel qu'affiché : sert au décompte de mots de validate:data. */
export function zoneFactSheetText(zone: Zone): string {
  const rows = buildZoneFactRows(zone).map((r) => `${r.label} ${r.value}`);
  return [buildZoneFactCaption(zone), ...rows, buildZoneFactSources(zone)].join(" ");
}
