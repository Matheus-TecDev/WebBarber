import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './routes/PrivateRoute';

import Home from './pages/Home';
import Horarios from './pages/Horarios';
import Equipe from './pages/Equipe';
import NossosPlanos from './pages/NossosPlanos';
import AgendamentoPage from './pages/AgendamentoPage';

// Serviços
import Corte from './pages/Corte';
import Barba from './pages/Barba';
import Flash from './pages/Flash';
import Sobrancelha from './pages/Sobrancelha';
import SobranNav from './pages/SobranNav';
import Terapia from './pages/Terapia';
import DepilacaoNariz from './pages/DepilacaoNariz';
import DepilacaoOrelha from './pages/DepilacaoOrelha';
import HidratacaoBarba from './pages/HidratacaoBarba';
import Hidratacao from './pages/Hidratacao';
import Pigmentacao from './pages/Pigmentacao';
import Selagem from './pages/Selagem';
import Tintura from './pages/Tintura';
import Luzes from './pages/Luzes';
import Platinado from './pages/Platinado';
import Pedicure from './pages/Pedicure';
import Manicure from './pages/Manicure';

// Autenticação
import Login from './pages/Login';
import CadastroPage from './components/CadastroPage';
import EsqueciSenha from './components/EsqueciSenha';

// Admin
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Rotas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />

        <Route path="/horarios" element={<Horarios />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/nossosplanos" element={<NossosPlanos />} />

        {/* Rota protegida */}
        <Route path="/AgendamentoPage" element={
          <PrivateRoute>
            <AgendamentoPage />
          </PrivateRoute>
        } />

        {/* Rota admin protegida */}
        <Route path="/admin" element={
          <PrivateRoute adminOnly>
            <AdminDashboard />
          </PrivateRoute>
        } />

        {/* Serviços */}
        <Route path="/corte" element={<Corte />} />
        <Route path="/barba" element={<Barba />} />
        <Route path="/flash" element={<Flash />} />
        <Route path="/sobrancelha" element={<Sobrancelha />} />
        <Route path="/sobrancelhananavalha" element={<SobranNav />} />
        <Route path="/terapia" element={<Terapia />} />
        <Route path="/depilacaonariz" element={<DepilacaoNariz />} />
        <Route path="/depilacaoorelha" element={<DepilacaoOrelha />} />
        <Route path="/hidratacaobarba" element={<HidratacaoBarba />} />
        <Route path="/hidratacao" element={<Hidratacao />} />
        <Route path="/pigmentacao" element={<Pigmentacao />} />
        <Route path="/selagem" element={<Selagem />} />
        <Route path="/tintura" element={<Tintura />} />
        <Route path="/luzes" element={<Luzes />} />
        <Route path="/platinado" element={<Platinado />} />
        <Route path="/pedicure" element={<Pedicure />} />
        <Route path="/manicure" element={<Manicure />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
