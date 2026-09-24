import {
  cleanupProse as cleanupBase,
  stripTransport,
  TRANSPORT_PATTERNS,
} from "../../src/lib/geo-cleanup";

export { stripTransport };

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Retire un élément signalé du texte et nettoie la phrase. */
export function removeElementFromText(text: string, element: string): string {
  if (!element.trim()) return text;
  const re = new RegExp(escapeRegExp(element), "giu");
  let out = text.replace(re, "");
  return out;
}

export function cleanupProse(text: string): string {
  let out = cleanupBase(text);
  out = out.replace(/\b(?:sur|entre|vers|près de|autour de|via|depuis|le long du|le long de)\s+(?:\.\s|$)/gi, "");
  return out.trim();
}

export function splitSentences(intro: string): string[] {
  return intro
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function sentenceHadTransport(sentence: string): boolean {
  return TRANSPORT_PATTERNS.some((re) => {
    re.lastIndex = 0;
    return re.test(sentence);
  });
}

function sentenceContainsRemoved(sentence: string, removeElements: string[]): boolean {
  const lower = sentence.toLowerCase();
  return removeElements.some((el) => lower.includes(el.toLowerCase()));
}

function looksBroken(sentence: string): boolean {
  if (/\bl'\s*(?:et|ou|,)/iu.test(sentence)) return true;
  if (/\benglobe,\s+l'\s*(?:et|des)/iu.test(sentence)) return true;
  if (/\b(?:circulent entre|le long du|depuis)\s*[,.;]\s*$/iu.test(sentence.trim())) return true;
  const words = sentence.replace(/[^\p{L}\s]/gu, "").trim().split(/\s+/);
  return words.length < 12;
}

export function rewriteIntroAfterRemovals(
  intro: string,
  removeElements: string[],
  zoneName: string,
  departement: string,
  etaMinutes: [number, number],
  neighbourNames: string,
  postalCode: string,
): string {
  let text = stripTransport(intro);
  const sentences = splitSentences(text);
  const kept = sentences.filter((s) => {
    if (sentenceHadTransport(s)) return false;
    if (sentenceContainsRemoved(s, removeElements)) return false;
    if (looksBroken(s)) return false;
    return s.replace(/[^\p{L}\s]/gu, "").trim().split(/\s+/).length >= 12;
  });

  let result = cleanupProse(kept.join(" "));

  const wordCount = result.split(/\s+/).filter(Boolean).length;
  if (wordCount < 150) {
    const voisins = neighbourNames
      ? ` Nous rejoignons aussi les communes limitrophes (${neighbourNames}) selon le trafic.`
      : "";
    const pad = `${zoneName} (${departement}, ${postalCode}) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre ${etaMinutes[0]} et ${etaMinutes[1]} minutes selon le trafic.${voisins} Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau.`;
    result = cleanupProse(result ? `${result} ${pad}` : pad);
  }
  if (result.split(/\s+/).filter(Boolean).length < 150) {
    result = cleanupProse(`${result} Le devis est ferme et annoncé avant le départ du technicien.`);
  }
  return result;
}

export function filterArrayItems(items: string[], removeSet: Set<string>): string[] {
  const lowerRemove = new Set([...removeSet].map((s) => s.toLowerCase()));
  return items
    .filter((item) => !lowerRemove.has(item.toLowerCase()))
    .map((item) => cleanupProse(stripTransport(item)));
}
