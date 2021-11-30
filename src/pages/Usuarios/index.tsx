import React from 'react';
import { Container, CardButton, Span } from './styles';

const UserMenu: React.FC = () => {
  return (
    <Container>
      <CardButton to="#">
        <Span>Avaliar Solicitações de Cadastro</Span>
      </CardButton>
    </Container>
  );
};
export default UserMenu;
