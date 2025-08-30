import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';

const PrivateRoute = ({ children, adminOnly = false }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Se não está logado, manda pro login
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !user.isAdmin) {
    // Se a rota é só pra admin e o user não é admin, manda pra home
    return <Navigate to="/" replace />;
  }

  // Se passou em tudo, libera o conteúdo
  return children;
};

export default PrivateRoute;
