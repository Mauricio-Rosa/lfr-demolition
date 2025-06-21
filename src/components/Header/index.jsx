import React from "react";
import logo from "@/assets/images/logo.png";
import SettingsDropdown from "@/components/DropDownSettings";

import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <img className="img-logo" src={logo} alt="logo" />
      <div className="header-right">
        <SettingsDropdown />
      </div>
    </header>
  );
}
