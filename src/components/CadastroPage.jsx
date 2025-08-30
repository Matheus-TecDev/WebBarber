// src/components/CadastroPage.jsx
import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask'; // versão 3.x (instalada via "@next")
import './CadastroPage.css';

const CadastroPage = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: ''
  });
  const [forcaSenha, setForcaSenha] = useState('');
  const [erro, setErro] = useState('');

  const avaliarForcaSenha = (senha) => {
    const forte = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;
    const media = /(?=.*[a-z])(?=.*\d).{6,}/;
    if (forte.test(senha)) return 'forte';
    if (media.test(senha)) return 'media';
    return 'fraca';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (name === 'senha') {
      setForcaSenha(avaliarForcaSenha(value));
    }
  };

  useEffect(() => {
    const buscarCep = async () => {
      if (form.cep.length === 8) {
        try {
          const resp = await fetch(`https://viacep.com.br/ws/${form.cep}/json/`);
          const dados = await resp.json();
          if (!dados.erro) {
            setForm((f) => ({
              ...f,
              rua: dados.logradouro,
              bairro: dados.bairro,
              cidade: dados.localidade
            }));
          }
        } catch (err) {
          console.error('Erro ao buscar CEP:', err);
        }
      }
    };
    buscarCep();
  }, [form.cep]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    if (!form.nome.trim().includes(' ')) {
      setErro('Digite o nome completo.');
      return;
    }
    if (form.senha !== form.confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }
    if (forcaSenha === 'fraca') {
      setErro('Use uma senha mais forte.');
      return;
    }

    const telefoneValido = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(form.telefone);
    if (!telefoneValido) {
      setErro('Telefone inválido. Use o formato (99) 99999-9999');
      return;
    }

    let usuarios = [];
    try {
      usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    } catch {
      usuarios = [];
    }
    const emailLower = form.email.toLowerCase();
    if (usuarios.some((u) => u.email === emailLower)) {
      setErro('E-mail já cadastrado.');
      return;
    }

    const novoUsuario = {
      ...form,
      email: emailLower,
      criadoEm: new Date().toLocaleString(),
      atualizadoEm: new Date().toLocaleString(),
      isAdmin: false
    };

    localStorage.setItem('usuarios', JSON.stringify([...usuarios, novoUsuario]));
    alert('Usuário cadastrado com sucesso!');
    setForm({
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      telefone: '',
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: ''
    });
    setForcaSenha('');
    setErro('');
  };

  return (
    <div className="page-wrapper">
      <div className="cadastro-container">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <h3 className="subtitulo">Credenciais Obrigatórias</h3>
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={form.nome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={form.senha}
            onChange={handleChange}
            required
          />
          <div className="barra-forca">
            <div className={`nivel ${forcaSenha}`} />
          </div>
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar senha"
            value={form.confirmarSenha}
            onChange={handleChange}
            required
          />
          <span className="aviso">⚠️ Anote sua senha em local seguro.</span>

          <h3 className="subtitulo">Dados para Contato</h3>
          <InputMask
            mask="(99) 99999-9999"
            value={form.telefone}
            onChange={handleChange}
          >
            <input
              name="telefone"
              placeholder="Telefone com DDD"
              required
            />
          </InputMask>

          <h3 className="subtitulo">Dados de Endereço</h3>
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            value={form.cep}
            onChange={handleChange}
          />
          <input
            type="text"
            name="rua"
            placeholder="Rua"
            value={form.rua}
            onChange={handleChange}
            readOnly
          />
          <input
            type="text"
            name="numero"
            placeholder="Número"
            value={form.numero}
            onChange={handleChange}
          />
          <input
            type="text"
            name="complemento"
            placeholder="Complemento"
            value={form.complemento}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bairro"
            placeholder="Bairro"
            value={form.bairro}
            onChange={handleChange}
            readOnly
          />
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={form.cidade}
            onChange={handleChange}
            readOnly
          />

          <button type="submit">Cadastrar</button>

          {erro && (
            <div className="erro-container">
              <div className="erro-emoji">
                🚫 Revise o formulário e corrija os campos abaixo.
              </div>
              <div className="erro-detalhe">{erro}</div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CadastroPage;
