import React, { useEffect, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import './styles.css'; // reutilize o CSS do Header

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  return (
    <label className="switch" aria-label="Alternar tema claro e escuro">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <span className="slider">
        <MdOutlineLightMode className="icon light-icon" size={20} />
        <MdOutlineDarkMode className="icon dark-icon" size={20} />
      </span>
    </label>
  );
}