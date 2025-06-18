import "./styles.css";
import { useTranslation } from "react-i18next";
import LicenceImg from "@/assets/a_webp/LicencedInsured.webp";
import LINKS from "@/constants/ExternalLinks";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">{t("Footer.Name")}</p>

        <div className="footer-social">
          <a
            href={LINKS.WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
          >
            <FaWhatsapp />
          </a>
          {/* <a
            href={LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a> */}
          {/* <a href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a> */}
          {/* <a href={LINKS.INSTAGRAM} aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href={LINKS.EMAIL} aria-label="Email">
            <FaEnvelope />
          </a> */}
        </div>
        <div className="footer-botton">
          <p className="footer-copy">
            © {new Date().getFullYear()} {t("Footer.Legal.Privacy")}
          </p>
          <img className="licence-img" src={LicenceImg} alt="image" />
        </div>
      </div>
    </footer>
  );
}
