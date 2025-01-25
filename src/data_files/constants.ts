import ogImageSrc from "src/components/sections/navbar&footer/logo.png";

export const SITE = {
  title: "AM Roofing",
  url: "https://AMRoofing.com",
  author: "Alen Davies",
};

export const SEO = {
  title: SITE.title,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : AM Roofing`,
  description:
    "AM Roofing is a full-service roofing company that provides roofing services to residential and commercial clients in Missuri.",
  image: ogImageSrc,
};
