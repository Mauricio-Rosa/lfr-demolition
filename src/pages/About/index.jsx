// src/pages/Automacao/index.jsx
import useHelmetMeta from "@/hooks/useHelmetMeta";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
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

function Contact() {
  const { t } = useTranslation();
  const helmet = useHelmetMeta({
   title: `${t("Navbar.About")} | ${t("Header.Title")}`,
    description:t("Header.About_description"),
  });

  const form = useRef();
  const closeModal = () => setModalOpen(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    severity: "",
  });

  // Inicializa o EmailJS uma vez quando o componente monta
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Envia o formulário usando o método sendForm do EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Substitua pelo seu Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Substitua pelo seu Template ID
        form.current
      )
      .then(
        (result) => {
          setModalContent({
            title: "Mensagem enviada com sucesso!",
            message: `Recebi sua mensagem, obrigado pelo contato!\n\n${result.text}`,
            severity: "success",
          });
          setModalOpen(true);
        },
        (error) => {
          setModalContent({
            title: "Erro ao enviar mensagem",
            message: `Erro ao enviar mensagem. Tente novamente mais tarde.\n\n${error.text}`,
            severity: "error",
          });
          setModalOpen(true);
        }
      );
  };

  return (
    <>
      {helmet}
      <Header/>
      <section className="contact">
        {/* Título da seção */}
        <h1 className="contact-title">{t("About.Title")}</h1>

        {/* Descrição */}
        <p className="contact-description">
          {t("About.CallToAcction")}
        </p>

        {/* Formulário de contato */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name" className="form-label">
            {t("About.Name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder={t("About.NameDesc")}
            required
          />

          <label htmlFor="email" className="form-label">
            {t("About.Email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder={t("About.EmailDesc")}
            required
          />

          <label htmlFor="message" className="form-label">
            {t("About.Message")}
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            placeholder={t("About.MessageDesc")}
            required
          ></textarea>

          <Button text={t("About.Send")} type="submit" className="form-button" />
        </form>

        {/* Informações de contato direto */}
        <div className="contact-info">
          <h1>{t("About.CallToAcction2")}</h1>
          <div className="social-links">
            <a
              className="a-contact-info"
              href={LINKS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
            >
              <FaWhatsapp className="contact-icon" />
              <span>Whatsapp</span>
            </a>
            {/* <a
              className="a-contact-info"
              href={LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="contact-icon" />
              <span>Linkedin</span>
            </a> */}
            {/* <a
            className="a-contact-info"
            href={LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="contact-icon" />
            <span>Github</span>
          </a> */}
            {/* <a
              className="a-contact-info"
              href={LINKS.INSTAGRAM}
              aria-label="Instagram"
            >
              <FaInstagram className="contact-icon" />
              <span>Instagram</span>
            </a> */}
          </div>
        </div>

        {/* Mapa de localização */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214392.66361527744!2d-82.09235511696009!3d26.611350847243145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db6ad9425ba311%3A0x882a91cc802976d7!2s7539%20Sika%20Deer%20Way%2C%20Fort%20Myers%2C%20FL%2033966%2C%20EUA!5e1!3m2!1spt-BR!2sbr!4v1750208794609!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Localização"
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalContent.title}
          severity={modalContent.severity}
        >
          <p>{modalContent.message}</p>
        </Modal>
      </section>
    </>
  );
}

export default Contact;
