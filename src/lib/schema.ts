import { company } from "@/data/company";
import {
  formatPrice,
  getCarBatteryBoostTotal,
  getCarBatteryReplacementTotal,
  getDspTotal,
  getStartingPrice,
  pricing,
} from "@/data/pricing";
import type { TravelZoneKey } from "@/data/types";
import { absoluteUrl, getSiteUrl } from "@/lib/metadata";

const DEPARTMENT_NAMES: Record<string, string> = {
  "75": "Paris",
  "77": "Seine-et-Marne",
  "78": "Yvelines",
  "91": "Essonne",
  "92": "Hauts-de-Seine",
  "93": "Seine-Saint-Denis",
  "94": "Val-de-Marne",
  "95": "Val-d'Oise",
};

export function businessId(): string {
  return `${getSiteUrl()}/#business`;
}

function postalAddressSchema() {
  const { address } = company;
  return {
    "@type": "PostalAddress" as const,
    streetAddress: address.street,
    postalCode: address.postalCode,
    addressLocality: address.city,
    addressRegion: address.addressRegion,
    addressCountry: address.country,
  };
}

function geoCoordinatesSchema(lat: number, lng: number) {
  return {
    "@type": "GeoCoordinates" as const,
    latitude: lat,
    longitude: lng,
  };
}

function openingHoursSchema() {
  return {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  };
}

function areaServedRegionsSchema() {
  return company.serviceAreas.map((area) => ({
    "@type": "AdministrativeArea" as const,
    name: area.replace(/\s*\(\d+\)\s*$/, "").trim(),
  }));
}

function priceFromKey(priceKey?: string): number | undefined {
  if (!priceKey) return undefined;
  const starting = getStartingPrice(priceKey);
  return starting ?? undefined;
}

function businessProviderRef() {
  return { "@id": businessId() };
}

/** Schéma LocalBusiness global — injecté dans le layout sur toutes les pages. */
export function globalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair"],
    "@id": businessId(),
    name: company.name,
    url: getSiteUrl(),
    logo: absoluteUrl(company.logoPath),
    image: absoluteUrl("/opengraph-image"),
    telephone: company.phone,
    email: company.email,
    description: company.description,
    address: postalAddressSchema(),
    geo: geoCoordinatesSchema(company.geo.latitude, company.geo.longitude),
    openingHoursSpecification: openingHoursSchema(),
    areaServed: areaServedRegionsSchema(),
    priceRange: "€€",
    currenciesAccepted: company.currenciesAccepted,
    paymentAccepted: company.paymentAccepted,
    sameAs: company.sameAs,
  };
}

/** Extension aggregateRating — uniquement sur /avis/ où la note Google est affichée avec source. */
export function businessAggregateRatingSchema() {
  const { googleReviews } = company;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId(),
    aggregateRating: aggregateRatingSchema({
      ratingValue: googleReviews.rating,
      reviewCount: googleReviews.reviewCount,
    }),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: getSiteUrl(),
    logo: absoluteUrl(company.logoPath),
    telephone: company.phone,
    email: company.email,
    description: company.description,
    address: postalAddressSchema(),
    areaServed: areaServedRegionsSchema(),
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: getSiteUrl(),
    description: company.description,
    inLanguage: "fr-FR",
    publisher: { "@type": "Organization", name: company.name },
  };
}

/** @deprecated Préférer globalBusinessSchema() dans le layout */
export function localBusinessSchema(input?: {
  areaServed?: string;
  lat?: number;
  lng?: number;
}) {
  return {
    ...globalBusinessSchema(),
    ...(input?.areaServed
      ? { areaServed: { "@type": "City", name: input.areaServed } }
      : {}),
    ...(input?.lat !== undefined && input.lng !== undefined
      ? { geo: geoCoordinatesSchema(input.lat, input.lng) }
      : {}),
  };
}

/** @deprecated Prefer zoneServiceSchema */
export function zoneLocalBusinessSchema(zone: {
  slug: string;
  name: string;
  departement: string;
  lat: number;
  lng: number;
}) {
  return zoneServiceSchema(zone);
}

export function zoneServiceSchema(zone: {
  slug: string;
  name: string;
  departement: string;
  lat: number;
  lng: number;
}) {
  const departmentName = DEPARTMENT_NAMES[zone.departement] ?? "Île-de-France";

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Dépannage et remorquage scooter et moto à ${zone.name}`,
    serviceType: "Dépannage et remorquage de deux-roues",
    url: absoluteUrl(`/zones-intervention/${zone.slug}/`),
    provider: businessProviderRef(),
    areaServed: {
      "@type": "City",
      name: zone.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: departmentName,
      },
    },
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  priceKey?: string;
  serviceType?: string;
}) {
  const price = priceFromKey(input.priceKey);
  const catalog = input.priceKey ? serviceOfferCatalogSchema(input.priceKey) : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType ?? input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    provider: businessProviderRef(),
    areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
    ...(price !== undefined
      ? {
          offers: {
            "@type": "Offer",
            price,
            priceCurrency: pricing.currency,
            availability: "https://schema.org/InStock",
            priceValidUntil: `${new Date().getFullYear()}-12-31`,
          },
        }
      : {}),
    ...(catalog ? { hasOfferCatalog: catalog } : {}),
  };
}

/** Grille tarifaire d'une prestation DSP (forfait + déplacements par zone). */
export function serviceOfferCatalogSchema(priceKey: string): Record<string, unknown> | undefined {
  if (!(priceKey in pricing.dsp.services)) {
    return undefined;
  }

  const service = pricing.dsp.services[priceKey as keyof typeof pricing.dsp.services];
  const zoneKeys: TravelZoneKey[] = ["PARIS", "PETITE_COURONNE", "GRANDE_COURONNE"];

  return {
    "@type": "OfferCatalog",
    name: `Tarifs ${service.label}`,
    itemListElement: zoneKeys.map((zoneKey) => ({
      "@type": "Offer",
      name: `${service.label} — ${pricing.travelFees[zoneKey].label}`,
      price: getDspTotal(zoneKey),
      priceCurrency: pricing.currency,
      description: `${formatPrice(pricing.dsp.baseFee)} prestation + ${formatPrice(pricing.travelFees[zoneKey].amount)} déplacement`,
    })),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function offerCatalogSchema() {
  const towingOffers = Object.entries(pricing.towing)
    .filter(([, tier]) => tier.amount !== null)
    .map(([key, tier]) => ({
      "@type": "Offer",
      name: `Remorquage — ${tier.label}`,
      price: tier.amount,
      priceCurrency: pricing.currency,
      offeredBy: businessProviderRef(),
      identifier: key,
    }));

  const dspOffers = Object.entries(pricing.dsp.services).map(([key, service]) => ({
    "@type": "Offer",
    name: service.label,
    price: getDspTotal("PARIS"),
    priceCurrency: pricing.currency,
    description: `${formatPrice(pricing.dsp.baseFee)} prestation + déplacement selon zone`,
    offeredBy: businessProviderRef(),
    identifier: key,
  }));

  const carBatteryOffers = [
    {
      "@type": "Offer",
      name: "Démarrage batterie voiture (booster) — Paris",
      price: getCarBatteryBoostTotal("PARIS"),
      priceCurrency: pricing.currency,
      offeredBy: businessProviderRef(),
    },
    {
      "@type": "Offer",
      name: "Remplacement batterie voiture (main-d'œuvre) — Paris",
      price: getCarBatteryReplacementTotal("PARIS"),
      priceCurrency: pricing.currency,
      offeredBy: businessProviderRef(),
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `Tarifs ${company.name}`,
    itemListElement: [...towingOffers, ...dspOffers, ...carBatteryOffers],
  };
}

export function itemListSchema(input: {
  name: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name,
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.url),
    })),
  };
}

export function webPageSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: "fr-FR",
    isPartOf: { "@type": "WebSite", url: getSiteUrl(), name: company.name },
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  authorRole: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    mainEntityOfPage: absoluteUrl(input.path),
    inLanguage: "fr-FR",
    image: absoluteUrl("/opengraph-image"),
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    author: {
      "@type": "Organization",
      name: company.name,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: { "@type": "ImageObject", url: absoluteUrl(company.logoPath) },
    },
  };
}

export function carBatteryServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Dépannage et remplacement de batterie automobile",
    name: "Dépannage batterie voiture à domicile",
    provider: businessProviderRef(),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: company.phone,
      availableLanguage: "fr",
    },
    url: absoluteUrl("/depannage-voiture/batterie/"),
  };
}

export function aggregateRatingSchema(input: {
  ratingValue: number;
  reviewCount: number;
}) {
  return {
    "@type": "AggregateRating",
    ratingValue: input.ratingValue,
    reviewCount: input.reviewCount,
    bestRating: 5,
    worstRating: 1,
  };
}

/** @deprecated Prefer globalBusinessSchema — kept for backward compatibility */
export function autoRepairSchema(areaServed?: string) {
  return localBusinessSchema(areaServed ? { areaServed } : undefined);
}
