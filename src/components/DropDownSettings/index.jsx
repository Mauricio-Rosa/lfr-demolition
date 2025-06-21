import React, { useState, useEffect } from "react";
import { IoMdSettings } from "react-icons/io";
import LanguageSelector from "@/components/LanguageSelector";
import ThemeToggle from "@/components/ThemeToggle";
import "./styles.css";

// Componente SettingsDropdown para configurações do usuário
function SettingsDropdown() {
  // Estado para controlar a abertura do menu
  const [open, setOpen] = useState(false);
  // Estado para o tema (light/dark)
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  // Estado para o idioma
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "pt-br"
  );

  // Atualiza o tema global e salva no localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Salva o idioma no localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Alterna o menu dropdown
  function handleToggle() {
    setOpen(!open);
  }

  // Alterna o tema entre claro e escuro
  function handleThemeChange() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  // Alterna o idioma entre português e inglês
  function handleLanguageChange() {
    setLanguage(language === "pt-br" ? "en" : "pt-br");
  }
  

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".settings-dropdown")) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="settings-dropdown">
      <button
        className="settings-toggle"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleToggle}
      >
        <IoMdSettings className={`main-icon${open ? " rotated" : ""}`} />
      </button>
      {open && (
        <ul className="dropdown-menu" aria-label="Menu de configurações">
          <li className="menu-item">
            <span>Tema</span>
            <ThemeToggle theme={theme} onToggle={handleThemeChange} />
          </li>
          <li className="menu-item">
            <span>Idioma</span>
            <LanguageSelector
              language={language}
              onChange={handleLanguageChange}
            />
          </li>
        </ul>
      )}
    </div>
  );
}

export default SettingsDropdown;
