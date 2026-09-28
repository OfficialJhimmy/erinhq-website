import { SITE_NAME, SITE_URL, absoluteUrl } from "./seo";
import { socialLinks } from "@/data/social";

// Escapes "</" so injected JSON-LD can never prematurely close the
// surrounding <script> tag.
export function jsonLdScriptProps(data: unknown) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: json },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Feyijimi Erinle",
    alternateName: "ERIN",
    url: SITE_URL,
    jobTitle: "AI Engineer & Software Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: socialLinks.map((social) => social.href),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
