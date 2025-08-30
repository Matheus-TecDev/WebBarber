// src/components/Header.jsx

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles-comp/Header.css';
import logo from '../images/logo.png';
import Sidebar from './Sidebar';
import { AuthContext } from './AuthProvider';
import EditarCadastroModal from './EditarCadastroModal'; // importe o modal

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEditarCadastro, setShowEditarCadastro] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleWhatsAppClick = () => {
    window.location.href =
      "https://web.whatsapp.com/send?phone=5585986003990&text=Ol%C3%A1%2C%20estou%20interessado%20nos%20seus%20servi%C3%A7os%21";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoClick = (e) => {
    if (user?.isAdmin) {
      e.preventDefault();
      navigate('/AgendamentoPage');
    }
  };

  // Ao clicar em “🚪 Sair”, apenas abrimos o modal (sem logout imediato)
  const handleLogout = () => {
    setShowEditarCadastro(true);
  };

  // Chamado quando alguém clicar em “Não” dentro do modal
  const onCancelarEdicao = () => {
    setShowEditarCadastro(false);
    logout();
    navigate('/login');
  };

  // Chamado quando alguém clicar em “Salvar alterações” e o modal terminar
  const onFechaModal = () => {
    setShowEditarCadastro(false);
    // aqui você pode, se quiser, navegar para outra tela ou apenas deixá-lo logado na página atual
    // Exemplo: navigate('/home') — mas normalmente basta fechar o modal e permanecer onde estiver.
  };

  return (
    <>
      <header className="header">
        {/* Botão de Login ou Sair */}
        <div className="login-button-container">
          {!user ? (
            <button onClick={() => navigate('/login')} className="login-button">
              Login
            </button>
          ) : (
            <button onClick={handleLogout} className="login-button">
              🚪 Sair
            </button>
          )}
        </div>

        {/* Botões de WhatsApp e Agendamento */}
        <div className="header-buttons">
          <button onClick={handleWhatsAppClick} className="button whatsapp-button">
            Entre em contato conosco
          </button>
          <button
            onClick={() => {
              if (user) {
                navigate('/AgendamentoPage');
              } else {
                navigate('/login');
              }
            }}
            className="button agendamento-button"
          >
            📅 Agendar Atendimento
          </button>
        </div>

        {/* Logo e Menu Hambúrguer */}
        <div className={`header-content ${menuOpen ? 'menu-open' : ''}`}>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <Link to="/" className="logo-link" onClick={handleLogoClick}>
            <img src={logo} alt="Logo Barbearia" className="logo" />
          </Link>

          <nav className="nav-links">
            <Link to="/horarios" className="nav-link">Horários de Funcionamento</Link>
            <Link to="/equipe" className="nav-link">Equipe</Link>
            <Link to="/nossosplanos" className="nav-link">Nossos Planos</Link>
          </nav>

          <Sidebar
            isVisible={menuOpen}
            onClose={toggleMenu}
            handleWhatsAppClick={handleWhatsAppClick}
            handleAgendamentoClick={() => {
              if (user) {
                navigate('/AgendamentoPage');
              } else {
                navigate('/login');
              }
            }}
          />
        </div>
      </header>

      {/**
       * Se showEditarCadastro for true, renderizamos o EditarCadastroModal
       * com as funções onCancelar e onFechaModal repassadas como props.
       */}
      {showEditarCadastro && (
        <EditarCadastroModal
          onCancelar={onCancelarEdicao}
          onFechaModal={onFechaModal}
        />
      )}
    </>
  );
};

export default Header;
