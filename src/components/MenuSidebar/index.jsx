import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { FaHome, FaTools } from "react-icons/fa";
import { GiDemolish } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { MdAttachMoney } from "react-icons/md";
import ferroLogo from "@/assets/a_webp/logo.webp";
import ROUTES from "@/routes/routes";
import { useTranslation } from "react-i18next";
import PERSONAL_INFO from "@/constants/personalInfo";
import "./styles.css";

// Array centralizado das opções de menu
const menuItems = [
  {
    key: "home",
    path: ROUTES.HOME.path,
    labelKey: "Navbar.Home",
    icon: <FaHome />,
  },
  {
    key: "services",
    path: ROUTES.SERVICES.path,
    labelKey: "Navbar.Services",
    icon: <FaTools />,
  },
  {
    key: "portfolio",
    path: ROUTES.PORTIFOLIO.path,
    labelKey: "Navbar.Portfolio",
    icon: <GiDemolish />,
  },
  {
    key: "budget",
    path: ROUTES.BUDGET.path,
    labelKey: "Navbar.Budget",
    icon: <MdAttachMoney />,
  },
  {
    key: "about",
    path: ROUTES.ABOUT.path,
    labelKey: "Navbar.About",
    icon: <GrUserWorker />,
  },
];

// Hook para detectar mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

export default function MenuSidebar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  if (isMobile) {
    // Renderiza o menu inferior (barra fixa no rodapé)
    return (
      <nav className="bottom-navbar">
        <ul className="bottom-nav-list">
          {menuItems.map((item) => (
            <li key={item.key}>
              <Link to={item.path} className="bottom-nav-link">
                {item.icon}
                <span>{t(item.labelKey)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  // Renderiza o sidebar para desktop/tablet
  return (
    <>
      <button
        className={`toggle-button ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        <div className={`logo-container ${isOpen ? "hidden" : ""}`}>
          <img src={ferroLogo} alt="Ferroport Logo" />
        </div>
        <div className={`icon-container ${isOpen ? "visible" : ""}`}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </div>
      </button>

      <nav className={`menu-container ${isOpen ? "open" : ""}`} role="navigation">
        <div className="menu-title">
          <h1>{t("Menu.Title")}</h1>
        </div>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.key} className="menu-item" onClick={closeMenu}>
              <Link to={item.path} className="nav-link">
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{t(item.labelKey)}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu-footer">© {new Date().getFullYear()} {PERSONAL_INFO.CURRENT_COMPANY}</div>
      </nav>
    </>
  );
}
