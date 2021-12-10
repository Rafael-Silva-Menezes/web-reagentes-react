import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

interface User {
  name: string;
}

interface AuthState {
  acessToken: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const acessToken = localStorage.getItem('@Reagentes:acessToken');
    const user = localStorage.getItem('@Reagentes:user');

    if (acessToken && user) {
      api.defaults.headers.authorization = `${acessToken}`;

      return { acessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('users/login', {
      email,
      password,
    });

    const { acessToken, user } = response.data;

    localStorage.setItem('@Reagentes:token', acessToken);
    localStorage.setItem('@Reagentes:user', JSON.stringify(user));

    api.defaults.headers.authorization = `${acessToken}`;

    setData({ acessToken, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Reagentes:token');
    localStorage.removeItem('@Reagentes:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@Reagentes:user', JSON.stringify(user));

      setData({
        acessToken: data.acessToken,
        user,
      });
    },
    [setData, data.acessToken],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
