import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import EXTERNAL_LINKS from "@/constants/externalLinks";

// Fallbacks globais (ajuste conforme seu projeto)
const DEFAULTS = {
  title: "Maurício Rosa | Portfólio",
  description:
    "Site pessoal de Maurício Rosa, especialista em automação industrial, engenharia elétrica e soluções digitais com Python, React, Power Platform e mais.",
  image: "/webp/android-chrome-512x512.webp", // deve existir em /public
  urlBase: EXTERNAL_LINKS.MY_DOMAIN, // personalize com seu domínio real
  twitterCard: "summary_large_image",
};

export default function useHelmetMeta({
  title,
  description,
  image,
  url,
  canonical,
  noIndex = false,
}) {
  const location = useLocation();

  const pageTitle = title || DEFAULTS.title;
  const pageDescription = description || DEFAULTS.description;
  const pageImage = image || DEFAULTS.image;
  const pageUrl = url || `${DEFAULTS.urlBase}${location.pathname}`;
  const pageCanonical = canonical || pageUrl;

  return (
    <Helmet>
      {/* SEO padrão */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Open Graph para redes sociais */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content={DEFAULTS.twitterCard} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* Canonical e Indexing */}
      <link rel="canonical" href={pageCanonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}
