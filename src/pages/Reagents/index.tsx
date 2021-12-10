import React from 'react';
import { Container, CardButton, Span } from './styles';

const Reagents: React.FC = ({ children }) => {
  return (
    <Container>
      <CardButton to="/add_license">
        <Span>Cadastrar Licença</Span>
      </CardButton>
      <CardButton to="/add_reagents">
        <Span>Cadastrar Reagentes Controlados</Span>
      </CardButton>
      <CardButton to="/list_reagents">
        <Span>Gerenciar Reagentes Controlados</Span>
      </CardButton>
    </Container>
  );
};
export default Reagents;
