import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const adminExiste = usuarios.some(u => u.email === 'adezildo@flash.com');

    if (!adminExiste) {
      usuarios.push({
        nome: 'AdezildoBarber',
        email: 'adezildo@flash.com',
        senha: 'gorilasgl455',
        telefone: '85999999999',
        isAdmin: true,
        criadoEm: new Date().toLocaleString(),
        atualizadoEm: new Date().toLocaleString()
      });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }

    // 2️⃣ Restaura usuário logado (se existir)
    const userSalvo = localStorage.getItem('userLogado');
    if (userSalvo) {
      setUser(JSON.parse(userSalvo));
    }
  }, []);

  // 3️⃣ Login normal + salvar user no localStorage
  const login = (email, senha) => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const encontrado = usuarios.find(
      u => u.email === email && u.senha === senha
    );

    if (!encontrado) {
      throw new Error('Credenciais inválidas');
    }

    const userData = {
      nome: encontrado.nome,
      email: encontrado.email,
      isAdmin: encontrado.isAdmin || false
    };

    setUser(userData);
    localStorage.setItem('userLogado', JSON.stringify(userData)); // salva sessão
  };

  // 4️⃣ Logout limpa tudo
  const logout = () => {
    setUser(null);
    localStorage.removeItem('userLogado');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
