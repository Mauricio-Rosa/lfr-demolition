import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './styles.css';

// Componente que exibe um botão para rolar a página ao topo
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Função para rolar suavemente até o topo da página
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Efeito para monitorar o scroll da página e exibir/esconder o botão
  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 200);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      className="scroll-to-top"
      onClick={handleScrollToTop}
      aria-label="Voltar ao topo"
      type="button"
    >
      <span className="scroll-to-top__icon">
        <FaArrowUp size={28} />
      </span>
    </button>
  );
}

export default ScrollToTop;