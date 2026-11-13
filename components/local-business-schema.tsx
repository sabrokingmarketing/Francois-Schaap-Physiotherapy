import { site, serviceGroups } from "@/content/site";

/**
 * Tells Google the real business details (LocalBusiness / Physiotherapy schema).
 * Only facts from content/site.ts are used.
 */
export function LocalBusinessSchema() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.summary,
    url: site.url,
    image: `${site.url}/images/og-image.png`,
    telephone: site.phone.international,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: `${site.address.suburb}, ${site.address.city}`,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    areaServed: [
      { "@type": "City", name: site.address.city },
      { "@type": "Place", name: `${site.address.suburb}, ${site.address.city}` },
    ],
    founder: {
      "@type": "Person",
      name: "Francois Schaap",
      jobTitle: "Physiotherapist",
      alumniOf: { "@type": "CollegeOrUniversity", name: "University of Pretoria" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Physiotherapy services",
      itemListElement: serviceGroups.flatMap((g) =>
        g.services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, description: s.text },
        })),
      ),
    },
  };

  if (site.hours.length > 0) {
    data.openingHours = site.hours.map((h) => `${h.days} ${h.times}`);
  }
  if (site.social.length > 0) {
    data.sameAs = site.social.map((s) => s.href);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
