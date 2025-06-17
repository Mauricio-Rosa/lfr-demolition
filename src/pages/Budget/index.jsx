// src/pages/Automacao/index.jsx
import useHelmetMeta from "@/hooks/useHelmetMeta";
import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import emailjs from "emailjs-com";
import PI from "@/constants/personalInfo";
import LINKS from "@/constants/ExternalLinks";
import "./styles.css";

function Budget() {
  const { t } = useTranslation();
    const helmet = useHelmetMeta({
    title: `${t("Navbar.Budget")} | ${t("Header.Title")}`,
    description:t("Header.Budget_description"),
  });


  return (
    <>
    {helmet}
    
    </>
  );
}

export default Budget;
