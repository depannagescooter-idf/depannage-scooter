import { company } from "@/data/company";
import { pricing } from "@/data/pricing";
import { absoluteUrl, getSiteUrl } from "@/lib/metadata";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName !== "TODO-RAISON-SOCIALE" ? company.legalName : company.name,
    url: getSiteUrl(),
    logo: absoluteUrl(company.logoPath),
    telephone: company.phone,
    email: company.email,
    description: company.description,
    areaServed: company.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: getSiteUrl(),
    description: company.description,
    publisher: { "@type": "Organization", name: company.name },
  };
}

export function autoRepairSchema(areaServed?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: company.name,
    url: getSiteUrl(),
    telephone: company.phone,
    email: company.email,
    description: company.description,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
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
    },
    ...(areaServed
      ? {
          areaServed: { "@type": "City", name: areaServed },
        }
      : {
          areaServed: company.serviceAreas.map((a) => ({ "@type": "AdministrativeArea", name: a })),
        }),
    priceRange: "€€",
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  priceKey?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    provider: { "@type": "Organization", name: company.name, telephone: company.phone },
    areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
    ...(input.priceKey
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: pricing.currency,
            availability: "https://schema.org/InStock",
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
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `Tarifs ${company.name}`,
    itemListElement: [
      ...Object.entries(pricing.towing).map(([key, tier]) => ({
        "@type": "Offer",
        name: tier.label,
        price: tier.amount ?? undefined,
        priceCurrency: pricing.currency,
        offeredBy: { "@type": "Organization", name: company.name },
        identifier: key,
      })),
    ],
  };
}
