// src/pages/Automacao/index.jsx
import useHelmetMeta from "@/hooks/useHelmetMeta";
import React, { useRef, useEffect, useState } from "react";
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

function BudgetContact() {
    const helmet = useHelmetMeta({
    title: "Contact | Mauricio F.R.",
    description:
      "Conheça a trajetória profissional de Maurício Freire Rosa, especialista em automação, engenharia elétrica e desenvolvimento de soluções digitais com Python, javascript, React e Power Platform.",
  });


  return (
    <>
    {helmet}
    
    </>
  );
}

export default BudgetContact;
