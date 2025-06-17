// src/pages/About/About.jsx
import "./styles.css";
import { useTranslation } from "react-i18next";
import useHelmetMeta from "@/hooks/useHelmetMeta";
import Article from "@/components/Article";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";

import LFR_1 from "@/assets/a_webp/LFR_1.webp";
import LFR_2 from "@/assets/a_webp/LFR_2.webp";
import LFR_3 from "@/assets/a_webp/LFR_3.webp";
import LFR_4 from "@/assets/a_webp/LFR_4.webp";
import LFR_5 from "@/assets/a_webp/LFR_5.webp";
import LFR_6 from "@/assets/a_webp/LFR_6.webp";
import LFR_7 from "@/assets/a_webp/LFR_7.webp";
import LFR_8 from "@/assets/a_webp/LFR_8.webp";
import LFR_9 from "@/assets/a_webp/LFR_9.webp";
import LFR_10 from "@/assets/a_webp/LFR_10.webp";

import PI from "@/constants/personalInfo";

import Button from "@/components/Button";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const helmet = useHelmetMeta({
    title: `${t("Navbar.Home")} | ${t("Header.Title")}`,
    description: t("Header.Home_description"),
  });

  return (
    <>
      {helmet}

      {/* <VideoPlayer src={Main_video} title="We are LFR Demolition" loop={true} /> */}

      <Article
        title="Smart Demolition"
        subtitle="Since 2017, L.F.R. Demolition has been a trusted name in residential and commercial demolition across Southwest Florida"
        date="Founded in 2017"
        images={[LFR_8, LFR_9, LFR_10, LFR_1, LFR_2]}
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

      <Article
        title="Deep Cleaning, Immediate Results"
        subtitle="Over 7 years delivering speed, client care, and impeccable results"
        date="..."
        images={[LFR_3, LFR_4, LFR_5, LFR_6, LFR_7]}
        content={
          <>
            <p>
              <strong>♻️ Disposal Included</strong>
              <br /> All removed materials are properly transported and
              discarded — no need to worry about dumpsters or debris. Our team
              handles everything from start to finish.
            </p>
            <p>
              <strong>⏱️ Fast, Clean, and Efficient Service</strong>
              <br /> In every project, we prioritize meeting deadlines,
              respecting your space, and delivering a professional finish. In
              the end, our goal is to leave the site cleaner than when we
              arrived.
            </p>
          </>
        }
        imagePosition="right"
      />

      <section className="funnels">
        <div className="funnel">
          <h3>{t("Funnels.Services.Title")}</h3>
          <p>{t("Funnels.Services.Description")}</p>

          <Button
            type="button"
            text={t("Funnels.Services.Button")}
            onClick={() => navigate("/services")}
          />
        </div>
        <div className="funnel">
          <h3>{t("Funnels.Budget.Title")}</h3>
          <p>{t("Funnels.Budget.Description")}</p>

          <Button
            type="button"
            text={t("Funnels.Budget.Button")}
            onClick={() => navigate("/services")}
          />
        </div>
        <div className="funnel">
          <h3>{t("Funnels.Portfolio.Title")}</h3>
          <p>{t("Funnels.Portfolio.Description")}</p>

          <Button
            type="button"
            text={t("Funnels.Portfolio.Button")}
            onClick={() => navigate("/portifolio")}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
