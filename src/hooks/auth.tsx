import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

interface User {
  name: string;
  role: string;
}

interface AuthState {
  accessToken: string;
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
    const accessToken = localStorage.getItem('@Reagentes:accessToken');
    const user = localStorage.getItem('@Reagentes:user');

    if (accessToken && user) {
      api.defaults.headers['x-access-token'] = `${accessToken}`;

      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('users/login', {
      email,
      password,
    });

    const { accessToken, name, role } = response.data;
    const user = {
      name,
      role,
    };
    localStorage.setItem('@Reagentes:token', accessToken);
    localStorage.setItem('@Reagentes:user', JSON.stringify(user));

    api.defaults.headers.authorization = `${accessToken}`;

    setData({ accessToken, user });
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
        accessToken: data.accessToken,
        user,
      });
    },
    [setData, data.accessToken],
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
