import Head from "next/head";
import { useRouter } from "next/router";

const Meta = ({ title, description, keywords, canonicalPath }) => {
  const router = useRouter();
  const baseUrl = "https://mapex.ai";
  const path = canonicalPath ?? router.asPath.split("?")[0];
  const canonicalUrl = `${baseUrl}${path}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}#website`,
        "url": baseUrl,
        "name": "Mapex",
        "alternateName": ["Mapex", "Mapex.ai"],
        "publisher": { "@id": `${baseUrl}#organization` }
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        "name": "Mapex",
        "url": baseUrl,
        "logo": `${baseUrl}/favicon/android-chrome-512x512.png`,
        "sameAs": [
          "https://www.linkedin.com/company/mapex-ai",
          "https://twitter.com/mapexai"
        ],
        "description": "Mapex is a leading provider of AI-powered geospatial mapping, land records digitization, and satellite data analysis solutions for governments and enterprises."
      },
      {
        "@type": "WebPage",
        "name": title || "Mapex",
        "url": canonicalUrl,
        "isPartOf": { "@id": `${baseUrl}#website` },
        "about": { "@id": `${baseUrl}#organization` }
      }
    ]
  };


  // Define per-page default metadata
  const pageMetaDefaults = {
    "/about": {
      title: "About Mapex – Who We Are",
      description:
        "Learn about Mapex’s vision, mission, and team driving innovation in geospatial intelligence and mapping technology for India and beyond."
    },
    "/contact": {
      title: "Contact Mapex – Get in Touch",
      description:
        "Reach out to Mapex for geospatial AI, mapping, or land record solutions. We're here to help governments and enterprises transform through location intelligence."
    },
    "/joinus": {
      title: "Join Mapex – Careers in Geospatial AI",
      description:
        "Explore exciting career opportunities at Mapex in AI, GIS, mapping, data science, and more. Join us in building the future of geospatial tech."
    },
    "/services": {
      title: "Mapex Services – AI Mapping, GIS & Land Intelligence",
      description:
        "Explore Mapex's geospatial services including land records digitization, satellite data analytics, urban planning support, and custom GIS development."
    },
    "/solutions": {
      title: "Mapex Solutions – Tailored Geospatial Intelligence",
      description:
        "Discover solutions by Mapex for smart cities, agriculture, infrastructure, disaster management, and digital governance through mapping AI."
    },
    "/case-studies": {
      title: "Mapex Case Studies – Real Impact with Mapping AI",
      description:
        "See how Mapex has transformed land records, infrastructure planning, and geospatial governance for governments and enterprises across India."
    },
    "/career": {
      title: "Mapex Careers – Work in AI & Mapping Innovation",
      description:
        "Join Mapex and help shape the future of geospatial technology. We’re hiring AI engineers, GIS experts, and mapping professionals across India."
    },
    "/blogs": {
      title: "Mapex Blog – Insights on Geospatial & AI Tech",
      description:
        "Stay updated with Mapex’s blog featuring articles on mapping technology, AI for governance, GIS trends, satellite data, and digital infrastructure."
    }
  };

  // Apply matching default if available
  const matchedMeta = pageMetaDefaults[path] || {};

  const defaultTitle = "Mapex - A leader in Platform Based GIS Data Engineering and 3D Mapping";
  const defaultDescription =
    "Mapex delivers advanced geospatial solutions including AI-powered mapping, satellite imagery analysis, GIS intelligence, and land records digitization. Serving governments, urban planners, and enterprises across India and beyond.";
  const defaultKeywords = [
    "Mapex", "geospatial AI", "GIS mapping", "satellite data analysis", "land records digitization",
    "urban planning", "remote sensing", "spatial analytics", "mapex.ai", "geo AI",
    "drone mapping", "topographic mapping", "land surveying", "digital land records",
    "property mapping", "rural development tech", "geospatial data services", "GIS India",
    "map intelligence", "AI land mapping", "real estate mapping", "spatial decision making",
    "urban infrastructure AI", "digital cadastral mapping"
  ].join(", ");

  const finalTitle = title || matchedMeta.title || defaultTitle;
  const finalDescription = description || matchedMeta.description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  
  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} key="canonical" />

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${baseUrl}/favicon/og-image.jpg`} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={`${baseUrl}/favicon/og-image.jpg`} />

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        key="structured-data"
      />

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-C3FFEBJQ2G"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C3FFEBJQ2G');
          `
        }}
      />
    </Head>
  );
};

export default Meta;
