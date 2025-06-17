import './styles.css';
import { Link } from "react-router-dom";
import { FaHome , FaTools } from "react-icons/fa";
import { GiDemolish } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { MdAttachMoney } from "react-icons/md";
import ROUTES from "@/routes/routes";
import { useTranslation } from "react-i18next";

function Navigation() {
  const { t } = useTranslation();
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to={ROUTES.HOME.path} className="nav-link">
            <FaHome  className="nav-icon" />
            <span className="nav-label">{t("Navbar.Home")}</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.SERVICES.path} className="nav-link">
            <FaTools className="nav-icon" />
            <span className="nav-label">{t("Navbar.Services")}</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.PORTIFOLIO.path} className="nav-link">
            <GiDemolish className="nav-icon" />
            <span className="nav-label">{t("Navbar.Portfolio")}</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.BUDGET.path} className="nav-link">
            <MdAttachMoney className="nav-icon" />
            <span className="nav-label">{t("Navbar.Budget")}</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.ABOUT.path} className="nav-link">
            <GrUserWorker className="nav-icon" />
            <span className="nav-label">{t("Navbar.About")}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
