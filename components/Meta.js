// components/Meta.js
import Head from "next/head";
import { useRouter } from "next/router";

const Meta = ({ title, description, keywords, canonicalPath }) => {

  /* ───────────────────────────────────────────────
      Canonical & social URL helpers
   ─────────────────────────────────────────────── */
  const router = useRouter();
  const baseUrl = "https://mapex.ai";      // ‼️ canonical domain
  const path = canonicalPath ?? router.asPath.split("?")[0]; // strip query
  const canonicalUrl = `${baseUrl}${path}`;


  /* ——— JSON-LD structured data ——— */
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}#website`,
        "url": baseUrl,
        "name": "Naari Hospital",
        "alternateName": ["NaariHospital", "Naari Hospital"],
        "publisher": { "@id": `${baseUrl}#hospital` }
      },
      {
        "@type": "Hospital",
        "@id": `${baseUrl}#hospital`,
        "name": "Naari Hospital",
        "alternateName": ["NaariHospital", "Naari Hospital"],
        "url": baseUrl,
        "logo": `${baseUrl}/img/logo.png`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "12, Indrapuri Society, Near, Patan - Chanasma Highway Rd, Tirupati Twp",
          "addressLocality": "Patan",
          "addressRegion": "Gujarat",
          "postalCode": "384265",
          "addressCountry": "IN"
        },
        "telephone": "+91-9099908908",
        "sameAs": [
          "https://www.facebook.com/naarihospitalpatan/",
          "https://www.instagram.com/naarihospitalpatan/"
        ]
      }
    ]
  };
  /* ───────────────────────────────────────────────
      Defaults
   ─────────────────────────────────────────────── */
  const defaultTitle = "Naari Hospital - Specialized Women & Fertility Care in Gujarat & Rajasthan";
  const defaultDescription =
    "Naari Hospital is dedicated to providing world-class healthcare exclusively for women, with compassion, expertise, and innovation. Located in Patan, Gujarat, India, our state-of-the-art facility offers a comprehensive range of gynecological, obstetric, reproductive, and wellness services designed to meet every woman’s unique needs at every stage of life.";
  const defaultKeywords = [
    "Naari Hospital", "IVF", "IUI", "Fertility", "PCOS treatment", "gynecology consultation",
    "recently married couple", "women aged 18-30", "trying to conceive", "first pregnancy",
    "Laparoscopy", "Obstetrics", "Maternity hospital", "High-risk pregnancy care",
    "Women’s health clinic", "Gynecologist for young women",
    "Patan", "Mehsana", "Palanpur", "Himatnagar", "Modasa", "Sidhpur", "Kalol",
    "Visnagar", "Gandhinagar", "Banaskantha", "Sabarkantha", "Aravalli", "Vav-Tharad",
    "Kutch", "Ahmedabad", "Dungarpur", "Udaipur", "Nathdwara",

    // Additional Keywords
    "Best IVF center in Gujarat", "infertility treatment", "uterus scan", "endometriosis treatment",
    "egg freezing", "male infertility", "pregnancy ultrasound", "natural pregnancy support",
    "reproductive health", "follicular study", "semen analysis", "gynecology hospital",
    "fertility center for couples", "menstrual disorder treatment", "irregular periods solution",
    "pelvic pain diagnosis", "women’s health specialist", "pregnancy care center",
    "IVF success rate Gujarat", "test tube baby", "fertility doctor",
    "early pregnancy scan", "hormone imbalance treatment", "IVF hospital near me",
    "gynec laparoscopic surgery", "sonography center", "antenatal care clinic",
    "family planning services", "pre-pregnancy counseling", "postnatal care",
    "newborn intensive care", "NICU in Gujarat", "ultrasound for women",
    "PCOD and PCOS clinic", "ovulation tracking", "uterine fibroid removal",
    "female infertility support", "embryo transfer", "intrauterine insemination",
    "fertility injection guidance", "pregnancy tips for women", "ovarian cyst treatment",
    "gynec for 18+ women", "delayed periods solution", "tubal blockage treatment",
    "women care clinic", "new mother support", "rural IVF access", "gynecology scan center",
    "fertility awareness", "local IVF specialists", "best maternity care Gujarat"
  ].join(", ");



  const finalTitle = title ? `${title} | Naari Hospital` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;


  /* ───────────────────────────────────────────────
     Render <Head>
  ─────────────────────────────────────────────── */
  return (
    <Head>
      {/* Primary SEO */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />


      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} key="canonical" />

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/favicon/og-image.jpg" />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content="/favicon/og-image.jpg" />

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

    </Head>
  );
};

export default Meta;
