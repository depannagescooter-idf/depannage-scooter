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

/** « Arrondissements limitrophes », « Communes limitrophes » ou les deux, selon la zone. */
export function limitrophesTitle(zone: Zone): string {
  const limitrophes = zoneFacts[zone.slug]?.limitrophes ?? [];
  const arrondissements = limitrophes.filter((l) => l.code.startsWith("751")).length;
  if (arrondissements === limitrophes.length) return "Arrondissements limitrophes";
  return arrondissements === 0 ? "Communes limitrophes" : "Communes et arrondissements limitrophes";
}

/** Communes ou arrondissements limitrophes officiels qui ont une page sur le site. */
export function limitrophesWithPage(zone: Zone): Required<FactLink>[] {
  return (zoneFacts[zone.slug]?.limitrophes ?? [])
    .map((l) => zoneLabel(l.code, l.nom))
    .filter((l): l is Required<FactLink> => Boolean(l.href));
}

/** Prestations du site, affichées en liens sur chaque page de zone. */
export function prestationsText(): string {
  return `${services.map((s, i) => (i === 0 ? s.name : lowerFirst(s.name))).join(", ")}.`;
}

/**
 * Fiche factuelle d'une zone : uniquement des données calculées (OSRM, geo.api.gouv.fr, BAN)
 * ou lues dans la grille tarifaire. Une donnée absente n'est pas affichée.
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
    rows.push({ label: limitrophesTitle(zone), value: links.map((l) => l.label).join(", "), links });
  }
  const voies = zoneVoies[zone.slug] ?? [];
  if (voies.length) {
    rows.push({ label: "Voies vérifiées dans la Base Adresse Nationale", value: voies.join(", ") });
  }
  return rows;
}

/** Données sans lesquelles une fiche n'est pas publiable : distance, délai annoncé, tarif. */
export function missingRequiredFacts(zone: Zone): string[] {
  const missing: string[] = [];
  if (!zoneFacts[zone.slug]?.route) missing.push("distance");
  const [min, max] = zone.etaMinutes;
  if (!(min > 0 && max >= min)) missing.push("délai");
  if (!(getDspTotal(getTravelZoneForZone(zone)) > 0)) missing.push("tarif");
  return missing;
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

/**
 * Texte propre à la zone, pour le décompte de mots de validate:data : la fiche et ses sources,
 * plus les prestations, retirées de la fiche mais affichées en liens sur la même page.
 */
export function zoneFactSheetText(zone: Zone): string {
  const rows = buildZoneFactRows(zone).map((r) => `${r.label} ${r.value}`);
  return [buildZoneFactCaption(zone), ...rows, buildZoneFactSources(zone), `Prestations ${prestationsText()}`].join(" ");
}
