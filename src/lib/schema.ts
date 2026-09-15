import { company } from "@/data/company";
import { formatPrice, getDspTotal, getStartingPrice, pricing } from "@/data/pricing";
import { absoluteUrl, getSiteUrl } from "@/lib/metadata";

function postalAddressSchema() {
  const { address } = company;
  return {
    "@type": "PostalAddress" as const,
    addressLocality: address.city,
    postalCode: address.postalCode,
    addressCountry: address.country,
    streetAddress: address.street,
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

function priceFromKey(priceKey?: string): number | undefined {
  if (!priceKey) return undefined;
  const starting = getStartingPrice(priceKey);
  return starting ?? undefined;
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
    areaServed: company.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    hasOfferCatalog: offerCatalogSchema(),
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

export function localBusinessSchema(input?: {
  areaServed?: string;
  lat?: number;
  lng?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair"],
    name: company.name,
    url: getSiteUrl(),
    telephone: company.phone,
    email: company.email,
    description: company.description,
    address: postalAddressSchema(),
    openingHoursSpecification: openingHoursSchema(),
    priceRange: "€€",
    ...(input?.lat !== undefined && input.lng !== undefined
      ? { geo: geoCoordinatesSchema(input.lat, input.lng) }
      : { geo: geoCoordinatesSchema(48.8566, 2.3522) }),
    ...(input?.areaServed
      ? { areaServed: { "@type": "City", name: input.areaServed } }
      : {
          areaServed: company.serviceAreas.map((a) => ({
            "@type": "AdministrativeArea",
            name: a,
          })),
        }),
  };
}

/** @deprecated Prefer localBusinessSchema — kept for backward compatibility */
export function autoRepairSchema(areaServed?: string) {
  return localBusinessSchema(areaServed ? { areaServed } : undefined);
}

export function zoneLocalBusinessSchema(zone: { name: string; lat: number; lng: number }) {
  return localBusinessSchema({
    areaServed: zone.name,
    lat: zone.lat,
    lng: zone.lng,
  });
}

export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  priceKey?: string;
}) {
  const price = priceFromKey(input.priceKey);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    provider: {
      "@type": "LocalBusiness",
      name: company.name,
      telephone: company.phone,
      url: getSiteUrl(),
    },
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
    offeredBy: { "@type": "Organization", name: company.name },
    identifier: key,
  }));

  const dspOffers = Object.entries(pricing.dsp.services).map(([key, service]) => ({
    "@type": "Offer",
    name: service.label,
    price: getDspTotal("PARIS"),
    priceCurrency: pricing.currency,
    description: `${formatPrice(pricing.dsp.baseFee)} prestation + déplacement selon zone`,
    offeredBy: { "@type": "Organization", name: company.name },
    identifier: key,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `Tarifs ${company.name}`,
    itemListElement: [...towingOffers, ...dspOffers],
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
      "@type": "Person",
      name: input.authorName,
      jobTitle: input.authorRole,
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
    provider: {
      "@type": "AutoRepair",
      name: company.name,
      telephone: company.phone,
      email: company.email,
      url: getSiteUrl(),
      priceRange: "€€",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Île-de-France",
      },
      openingHoursSpecification: openingHoursSchema(),
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: company.phone,
      availableLanguage: "fr",
    },
    url: absoluteUrl("/depannage-sur-place/batterie-voiture/"),
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
