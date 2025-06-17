// src/pages/About/About.jsx
import "./styles.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import useHelmetMeta from "@/hooks/useHelmetMeta";

import PI from "@/constants/personalInfo";
import { getExperienceTime } from "@/utils/experienceCounter";



import Button from "@/components/Button";

function Home() {
  const { t } = useTranslation();
  const experience = getExperienceTime();
  const imgRef = useRef(null);
  const navigate = useNavigate();

  const helmet = useHelmetMeta({
    title: `${t("Navbar.Home")} | ${t("Header.Title")}`,
    description:t("Header.Home_description"),
  });

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imgElement.classList.add("animate-scale-up-hor-left");
          observer.unobserve(imgElement);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(imgElement);
    return () => observer.disconnect();
  }, []);

  return (
    <>
    {helmet}
      

    </>
  );
}

export default Home;
