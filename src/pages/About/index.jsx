// src/pages/Automacao/index.jsx
import useHelmetMeta from "@/hooks/useHelmetMeta";
import { useTranslation } from "react-i18next";
import Article from "@/components/Article";

import "./styles.css";

function About() {
  const { t } = useTranslation();
  const helmet = useHelmetMeta({
    title: `${t("Navbar.About")} | ${t("Header.Title")}`,
    description:t("Header.About_description"),
  });
  return (
    <>
      {helmet}
      
    </>
  );
}

export default About;
