// src/components/EditarCadastroModal.jsx
import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './AuthProvider';
import './EditarCadastro.css';

const EditarCadastroModal = ({ onCancelar, onFechaModal }) => {
  const { user, login } = useContext(AuthContext);

  const [dados, setDados] = useState(null);
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [etapa, setEtapa] = useState('confirmacao');

  // Carrega os dados do usuário assim que montar
  useEffect(() => {
    if (!user) return;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioLogado = usuarios.find(u => u.email === user.email);
    if (usuarioLogado) {
      setDados(usuarioLogado);
    }
  }, [user]);

  // Funções de validação
  const validarSenha = (senha) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(senha);
  const validarNome = (nome) => nome.trim().split(' ').length >= 2;
  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validarTelefone = (tel) => /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(tel);

  // Atualiza os campos do objeto "dados"
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados(prev => ({ ...prev, [name]: value }));
  };

  // Quando o usuário clicar em “Sim” na confirmação inicial
  const handleSim = () => {
    setEtapa('form');
    setMensagem('');
  };

  // Valida e salva alterações no formulário
  const handleSalvar = () => {
    if (!validarNome(dados.nome)) {
      return setMensagem('Nome inválido (precisa ter ao menos duas palavras)');
    }
    if (!validarEmail(dados.email)) {
      return setMensagem('Email inválido');
    }
    if (!validarTelefone(dados.telefone)) {
      return setMensagem('Telefone inválido');
    }

    // Se há tentativa de troca de senha, validações adicionais
    if (senhaAtual || novaSenha || confirmarSenha) {
      if (!senhaAtual) return setMensagem('Digite sua senha atual');
      if (novaSenha !== confirmarSenha) return setMensagem('As novas senhas não coincidem');
      if (!validarSenha(novaSenha)) {
        return setMensagem('Nova senha fraca (mínimo 6 caracteres, com letra maiúscula, minúscula e número)');
      }
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const idx = usuarios.findIndex(u => u.email === user.email);
    if (idx === -1) return setMensagem('Usuário não encontrado');

    if (senhaAtual && usuarios[idx].senha !== senhaAtual) {
      return setMensagem('Senha atual incorreta');
    }

    // Atualiza o objeto do usuário
    usuarios[idx] = {
      ...usuarios[idx],
      ...dados,
      senha: novaSenha ? novaSenha : usuarios[idx].senha,
      atualizadoEm: new Date().toLocaleString(),
    };

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    login(usuarios[idx].email, usuarios[idx].senha);
    setMensagem('Dados atualizados com sucesso!');

    setTimeout(() => {
      onFechaModal();
    }, 1200);
  };

  // Se os dados ainda não carregaram e estamos na etapa do formulário
  if (!dados && etapa === 'form') {
    return (
      <div className="confirm-overlay">
        <div className="confirm-box">
          <button className="fechar-modal" onClick={onCancelar}>✖</button>
          <p>Carregando informações do usuário...</p>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------
  // ETAPA 1: pergunta de confirmação (“Deseja editar seu cadastro?”)
  if (etapa === 'confirmacao') {
    return (
      <div className="confirm-overlay">
        <div className="confirm-box">
          <button className="fechar-modal" onClick={onCancelar}>✖</button>
          <h2>Deseja editar seu cadastro?</h2>
          <div className="confirm-buttons">
            <button className="btn-nao" onClick={onCancelar}>Não</button>
            <button className="btn-sim" onClick={handleSim}>Sim</button>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------
  // ETAPA 2: formulário de edição propriamente dito
  return (
    <div className="confirm-overlay">
      <div className="confirm-box" style={{ maxWidth: '520px' }}>
        <button className="fechar-modal" onClick={onCancelar}>✖</button>
        <div className="editar-container">
          <h2>Editar Cadastro</h2>

          {/* CAMPO NOME DESABILITADO */}
          <input
            name="nome"
            value={dados.nome}
            disabled
            placeholder="Nome completo"
          />

          {/* DEMAIS CAMPOS EDITÁVEIS */}
          <input
            name="email"
            value={dados.email}
            onChange={handleChange}
            placeholder="E-mail"
          />
          <input
            name="telefone"
            value={dados.telefone}
            onChange={handleChange}
            placeholder="Telefone"
          />
          <input
            name="cep"
            value={dados.cep}
            onChange={handleChange}
            placeholder="CEP"
          />
          <input
            name="rua"
            value={dados.rua}
            onChange={handleChange}
            placeholder="Rua"
          />
          <input
            name="numero"
            value={dados.numero}
            onChange={handleChange}
            placeholder="Número"
          />
          <input
            name="complemento"
            value={dados.complemento}
            onChange={handleChange}
            placeholder="Complemento"
          />
          <input
            name="bairro"
            value={dados.bairro}
            onChange={handleChange}
            placeholder="Bairro"
          />
          <input
            name="cidade"
            value={dados.cidade}
            onChange={handleChange}
            placeholder="Cidade"
          />

          <hr />
          <h4>Alterar senha</h4>
          <input
            type="password"
            placeholder="Senha atual"
            value={senhaAtual}
            onChange={e => setSenhaAtual(e.target.value)}
          />
          <input
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={e => setNovaSenha(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar nova senha"
            value={confirmarSenha}
            onChange={e => setConfirmarSenha(e.target.value)}
          />

          {mensagem && <p className="mensagem">{mensagem}</p>}
          <button onClick={handleSalvar}>SALVAR ALTERAÇÕES</button>
        </div>
      </div>
    </div>
  );
};

EditarCadastroModal.propTypes = {
  onCancelar: PropTypes.func.isRequired,
  onFechaModal: PropTypes.func.isRequired,
};

export default EditarCadastroModal;
