import React from 'react';
import { Container, CardButton, Span } from './styles';

const MenuLaboratory: React.FC = () => {
  return (
    <Container>
      <CardButton to="/add_laboratory">
        <Span>Cadastrar Laboratório</Span>
      </CardButton>
      <CardButton to="/bond_request">
        <Span>Gerenciar Laboratórios</Span>
      </CardButton>
    </Container>
  );
};
export default MenuLaboratory;
