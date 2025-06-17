import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

const languages = [
  { code: "pt", label: "Português-Brasil", flag: "https://flagcdn.com/w40/br.png" },
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/us.png" },
  // { code: "es", label: "Español", flag: "https://flagcdn.com/w40/es.png" }
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [alignRight, setAlignRight] = useState(false);
  const currentLang = i18n.language;

  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
    setSearch("");
  };

  const filteredLanguages = languages.filter((lang) =>
    lang.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && buttonRef.current && dropdownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownWidth = dropdownRef.current.offsetWidth;
      const viewportWidth = window.innerWidth;

      // Verifica se o dropdown ultrapassa a largura da viewport
      if (buttonRect.left + dropdownWidth > viewportWidth) {
        setAlignRight(true);
      } else {
        setAlignRight(false);
      }

      if (searchRef.current) {
        searchRef.current.focus();
      }
    }
  }, [isOpen]);

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lidar com ESC
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      if (search === "") {
        setIsOpen(false);
      } else {
        setSearch("");
      }
    }
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        ref={buttonRef}
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar idioma"
        role="button"
        type="button"
      >
        <img
          src={languages.find((lang) => lang.code === currentLang)?.flag}
          alt={currentLang}
          className="language-flag"
        />
      </button>

      {isOpen && (
        <div
          className={`language-dropdown ${alignRight ? "align-right" : ""}`}
          onKeyDown={handleKeyDown}
          ref={dropdownRef}
        >
          <input
            ref={searchRef}
            type="text"
            placeholder="Buscar idioma..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="language-search"
          />
          <ul className="language-list">
            {filteredLanguages.map((lang) => (
              <li
                key={lang.code}
                className="language-option"
                onClick={() => handleLanguageChange(lang.code)}
              >
                <img src={lang.flag} alt={lang.code} className="language-flag" />
                {lang.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
