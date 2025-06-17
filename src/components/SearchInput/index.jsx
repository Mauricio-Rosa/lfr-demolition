import React, { useState } from "react";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const container = document.getElementById("content"); // você pode ajustar isso
    if (!container || searchTerm.trim() === "") return;

    const elements = container.querySelectorAll("*");

    elements.forEach((el) => el.classList.remove("highlighted")); // limpa antes

    let found = false;
    elements.forEach((element) => {
      if (
        element.textContent
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        element.classList.add("highlighted");
        if (!found) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          found = true;
        }
      }
    });
  };

  const handleClear = () => {
    setSearchTerm("");
    const container = document.getElementById("content");
    if (!container) return;
    const elements = container.querySelectorAll(".highlighted");
    elements.forEach((el) => el.classList.remove("highlighted"));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleSearch();
    else if (event.key === "Escape") handleClear();
  };

  return (
    <div className="search-input">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Digite para pesquisar..."
      />
      <Button
                  type = 'button'
                  text= "Pesquisar"
                  onClick={handleSearch}
                  />
    </div>
  );
}

export default SearchInput;
