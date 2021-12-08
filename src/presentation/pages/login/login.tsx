import React from 'react';
// import Styles from './login-styles.scss';
import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <form>
        <input placeholder="email" />
        <input placeholder="senha" />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
};

export default Login;
