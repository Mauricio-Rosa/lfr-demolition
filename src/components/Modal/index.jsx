import { useEffect } from 'react';
import { FaTimes, FaInfoCircle, FaExclamationTriangle, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'; // Importação dos ícones do React Icons
import './styles.css'; // Importação dos estilos do modal

export default function Modal({ isOpen, onClose, title, children, severity = 'info' }) {
  // Define o ícone com base na criticidade
  const getIconBySeverity = () => {
    switch (severity) {
      case 'info':
        return <FaInfoCircle />;
      case 'warning':
        return <FaExclamationTriangle />;
      case 'error':
        return <FaExclamationCircle />;
      case 'success':
        return <FaCheckCircle />;
      default:
        return <FaInfoCircle />;
    }
  };

  // Adiciona o evento para fechar o modal com a tecla "Esc"
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null; // Retorna null se o modal não estiver aberto

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content modal-${severity}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes /> {/* Ícone de fechar */}
        </button>
        <h2 className="modal-title">
          {getIconBySeverity()} {/* Ícone baseado na criticidade */}
          {title}
        </h2>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}