// src/pages/Automacao/index.jsx
import "./styles.css";
import { useTranslation } from "react-i18next";
import useHelmetMeta from "@/hooks/useHelmetMeta";
import SettingsDropdown from "@/components/DropDownSettings";
import logo from "@/assets/images/logo.png";
import Article from "@/components/Article";

import Video1 from "@/assets/videos/floor_removal.mp4";

function StartScreen() {
  const { t } = useTranslation();
  const helmet = useHelmetMeta({
    title: `${t("Navbar.Services")} | ${t("Header.Title")}`,
    description: t("Header.Services_description"),
  });
  return (
    <>
      {helmet}
      {/* Container do vídeo de fundo e conteúdo sobreposto */}
      <div className="landing-background">
        <video
          className="video-card-ss"
          src={Video1}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="landing-overlay">
          <img src={logo} alt="logo-company" className="logo-image" />
        </div>
      </div>
      <Article
              title="Smart Demolition"
              subtitle="Since 2017, L.F.R. Demolition has been a trusted name in residential and commercial demolition across Southwest Florida"
              date="Founded in 2017"
              content={
                <>
                  <p>
                    L.F.R. Demolition was founded in 2017 with a clear purpose: to
                    deliver demolition and floor removal services with speed, safety,
                    and technical excellence. Operating primarily in the Fort Myers,
                    Cape Coral, and surrounding areas, this family-owned business has
                    grown based on client trust and meticulous attention to every
                    project detail.
                  </p>
                  <p>
                    <strong>🔧 What We Do</strong>
                    <br /> We specialize in floor removal (tile, wood, carpet, VCT)
                    and interior demolition for kitchens, bathrooms, and partitions.
                    We use professional-grade tools such as automatic scrapers,
                    industrial HEPA vacuums, and air purifiers to ensure complete dust
                    control and a thoroughly clean worksite.
                  </p>
                </>
              }
              imagePosition="left"
            />
    </>
  );
}

export default StartScreen;
