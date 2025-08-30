import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 IMPORTANTE
import './EsqueciSenha.css';

const EsqueciSenha = () => {
  const navigate = useNavigate(); // 👈 Hook de navegação
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [verificado, setVerificado] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const validarSenha = (senha) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(senha);

  const verificarEmail = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const existe = usuarios.find(u => u.email === email);
    if (existe) {
      setVerificado(true);
      setMensagem('');
    } else {
      setMensagem('E-mail não encontrado');
    }
  };

  const redefinirSenha = () => {
    if (!validarSenha(novaSenha)) {
      setMensagem('Senha muito fraca');
      return;
    }

    if (novaSenha !== confirmarSenha) {
      setMensagem('As senhas não coincidem');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const idx = usuarios.findIndex(u => u.email === email);
    if (idx === -1) return setMensagem('Usuário não encontrado');

    usuarios[idx].senha = novaSenha;
    usuarios[idx].atualizadoEm = new Date().toLocaleString();
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    setMensagem('✅ Senha redefinida com sucesso! Redirecionando...');
    setNovaSenha('');
    setConfirmarSenha('');

    setTimeout(() => {
      navigate('/login'); // 👈 redireciona após 2.5s
    }, 2500);
  };

  return (
    <div className="esqueci-container">
      <h2>Redefinir Senha</h2>

      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={verificado}
      />
      {!verificado && (
        <button onClick={verificarEmail}>Verificar</button>
      )}

      {verificado && (
        <>
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
          <small className="aviso">⚠️ Use uma senha forte com letras maiúsculas, minúsculas e números.</small>
          <button onClick={redefinirSenha}>Salvar nova senha</button>
        </>
      )}

      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
};

export default EsqueciSenha;
