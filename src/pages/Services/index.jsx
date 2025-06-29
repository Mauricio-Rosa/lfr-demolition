// src/pages/Automacao/index.jsx
import "./styles.css";
import { useTranslation } from "react-i18next";
import useHelmetMeta from "@/hooks/useHelmetMeta";
import Article from "@/components/Article";
import Header from "@/components/Header";


function Services() {
  const { t } = useTranslation();
  const helmet = useHelmetMeta({
    title: `${t("Navbar.Services")} | ${t("Header.Title")}`,
    description:t("Header.Services_description"),
  });
  return (
    <>
    {helmet}
    <Header/>
    </>
  );
}

export default Services;
