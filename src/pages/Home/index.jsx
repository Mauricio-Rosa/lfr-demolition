// src/pages/About/About.jsx
import "./styles.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import useHelmetMeta from "@/hooks/useHelmetMeta";

import PI from "@/constants/personalInfo";
import { getExperienceTime } from "@/utils/experienceCounter";



import Button from "@/components/Button";

function Home() {
  const experience = getExperienceTime();
  const imgRef = useRef(null);
  const navigate = useNavigate();

  const helmet = useHelmetMeta({
    title: "About | Mauricio F.R.",
    description:
      "Conheça a trajetória profissional de Maurício Freire Rosa, especialista em automação, engenharia elétrica e desenvolvimento de soluções digitais com Python, javascript, React e Power Platform.",
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
