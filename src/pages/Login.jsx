import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';
import './Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      login(email, senha);
      navigate('/'); // ou redirecionar pra /AgendamentoPage direto
    } catch (err) {
      setErro(err.message || 'Falha no login');
    }
  };

  return (
    <div className="login-container">
      <h2>Entrar na Conta</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
        />

        {erro && <p className="erro">{erro}</p>}

        <button type="submit">Entrar</button>

        <div className="login-links">
          <p>
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro">Cadastre-se agora</Link>
          </p>
          <p>
            <Link to="/esqueci-senha">Esqueci minha senha</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
