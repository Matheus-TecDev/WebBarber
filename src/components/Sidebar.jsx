import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isVisible, onClose, handleWhatsAppClick, handleClick, handleAgendamentoClick }) => {
  return (
    <>
      <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="sidebar-header">
          <h2>Menu</h2>
        </div>
        <button onClick={handleWhatsAppClick}>Entre em contato conosco</button>
        <button onClick={handleClick}>Benefícios do Flash Club</button>
        <button onClick={handleAgendamentoClick}>Agendamento</button>
      </div>

      {/* Overlay para dar destaque ao sidebar */}
      <div className={`sidebar-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}></div>
    </>
  );
};

export default Sidebar;
