import './styles.css';
import { useTranslation } from "react-i18next";
import LINKS from "@/constants/ExternalLinks";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
    const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">{t("Footer.Name")}</p>
        
        <div className="footer-social">
          <a href={LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
            <FaWhatsapp />
          </a>
          <a href={LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={LINKS.INSTAGRAM} aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href={LINKS.EMAIL} aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        
        <p className="footer-copy">
          © {new Date().getFullYear()} {t("Footer.Legal.Privacy")}
        </p>
      </div>
    </footer>
  );
}
