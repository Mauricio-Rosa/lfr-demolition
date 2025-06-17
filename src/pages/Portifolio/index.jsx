// src/pages/Automacao/index.jsx
import { useTranslation } from "react-i18next";
import useHelmetMeta from "@/hooks/useHelmetMeta";
import Article from "@/components/Article";
import "./styles.css";

function Portifolio() {
  const { t } = useTranslation();
    const helmet = useHelmetMeta({
    title: `${t("Navbar.Portifolio")} | ${t("Header.Title")}`,
    description:t("Header.Portifolio_description"),
  });
  return (
    <>
    {helmet}
    
    </>
  );
}

export default Portifolio;
