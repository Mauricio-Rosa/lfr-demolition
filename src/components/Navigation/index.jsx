import { Link } from "react-router-dom";
import './styles.css';
import { FaUserGraduate, FaTools, FaCode } from "react-icons/fa";
import { SiRockwellautomation } from "react-icons/si";
import { IoCallSharp } from "react-icons/io5";
import ROUTES from "@/routes/routes";
import { useTranslation } from "react-i18next";

function Navigation() {
  const { t } = useTranslation();
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to={ROUTES.HOME.path} className="nav-link">
            <FaUserGraduate className="nav-icon" />
            <span className="nav-label">{t("Navbar.Home")}</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.SERVICES.path} className="nav-link">
            <SiRockwellautomation className="nav-icon" />
            <span className="nav-label">{t("Navbar.Services")}</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.PORTIFOLIO.path} className="nav-link">
            <FaTools className="nav-icon" />
            <span className="nav-label">{t("Navbar.Portfolio")}</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.ABOUT.path} className="nav-link">
            <FaCode className="nav-icon" />
            <span className="nav-label">{t("Navbar.About")}</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.BUDGETCONTACT.path} className="nav-link">
            <IoCallSharp className="nav-icon" />
            <span className="nav-label">{t("Navbar.Contact")}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
