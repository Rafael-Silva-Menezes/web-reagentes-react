import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container, CardButton, Span } from './styles';
import { SolicitacaoCadastro } from '..';

const UserMenu: React.FC = () => {
  const { path, url } = useRouteMatch();

  return (
    <Container>
      <CardButton to="/solicitacao-cadastro">
        <Span>Avaliar Solicitações de Cadastro</Span>
      </CardButton>
    </Container>
  );
};
export default UserMenu;
