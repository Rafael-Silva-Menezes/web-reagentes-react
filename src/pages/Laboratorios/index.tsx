import React from 'react';
import { Container, CardButton, Span } from './styles';

const MenuLaboratorio: React.FC = () => {
  return (
    <Container>
      <CardButton to="/cadastrar_laboratorio">
        <Span>Cadastrar Laboratório</Span>
      </CardButton>
    </Container>
  );
};
export default MenuLaboratorio;
