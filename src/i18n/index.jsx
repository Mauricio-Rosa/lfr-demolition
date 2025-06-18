import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationPT from "./locales/pt/translation.json";
import translationES from "./locales/es/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(LanguageDetector) // detecta idioma automaticamente
  .use(initReactI18next) // integra com React
  .init({
    resources,
    fallbackLng: "en", // idioma padrão caso não detecte
    debug: false,       // coloque true se quiser logs no console
    interpolation: {
      escapeValue: false, // React já faz escaping
    },
  });

export default i18n;
