import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/AuthProvider';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);
  const [selecionado, setSelecionado] = useState(null);

  useEffect(() => {
    if (!user?.isAdmin) {
      navigate('/');
      return;
    }

    // Simulação: pegar do localStorage futuramente
    const dados = JSON.parse(localStorage.getItem('usuarios')) || [];
    setUsuarios(dados);
  }, [user, navigate]);

  return (
    <div className="admin-container">
      <h2>Painel de Usuários Cadastrados</h2>

      <div className="card-grid">
        {usuarios.map((u, i) => (
          <div key={i} className="card" onClick={() => setSelecionado(u)}>
            <h3>{u.nome}</h3>
            <p><strong>Email:</strong> {u.email}</p>
            <p><strong>Telefone:</strong> {u.telefone}</p>
          </div>
        ))}
      </div>

      {selecionado && (
        <div className="modal-overlay" onClick={() => setSelecionado(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Detalhes do Usuário</h3>
            <p><strong>Nome:</strong> {selecionado.nome}</p>
            <p><strong>Email:</strong> {selecionado.email}</p>
            <p><strong>Telefone:</strong> {selecionado.telefone}</p>
            <p><strong>CEP:</strong> {selecionado.cep}</p>
            <p><strong>Rua:</strong> {selecionado.rua}</p>
            <p><strong>Número:</strong> {selecionado.numero}</p>
            <p><strong>Complemento:</strong> {selecionado.complemento}</p>
            <p><strong>Bairro:</strong> {selecionado.bairro}</p>
            <p><strong>Cidade:</strong> {selecionado.cidade}</p>
            <p><strong>🕓 Criado em:</strong> {selecionado.criadoEm}</p>
            <p><strong>📝 Atualizado em:</strong> {selecionado.atualizadoEm}</p>
            <button onClick={() => setSelecionado(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
