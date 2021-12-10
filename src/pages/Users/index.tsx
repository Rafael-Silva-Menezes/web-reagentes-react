import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container, CardButton, Span } from './styles';
import RegistrationRequest from './RegistrationRequest';

const MenuUsers: React.FC = () => {
  const { path, url } = useRouteMatch();

  return (
    <Container>
      <CardButton to="/request_register">
        <Span>Avaliar Solicitações de Cadastro</Span>
      </CardButton>
    </Container>
  );
};
export default MenuUsers;
