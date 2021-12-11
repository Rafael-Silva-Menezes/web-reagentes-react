import React from 'react';
import { Container, CardButton, Span } from './styles';
import { path } from '../../routes';

const MenuLaboratory: React.FC = () => {
  return (
    <Container>
      <CardButton to={path.laboratories.add}>
        <Span>Cadastrar Laboratório</Span>
      </CardButton>
      <CardButton to={path.laboratories.manage}>
        <Span>Gerenciar Laboratórios</Span>
      </CardButton>
      <CardButton to={path.laboratories.manageAddRequest}>
        <Span>Solicitações de Criação de Laboratório</Span>
      </CardButton>
      <CardButton to={path.laboratories.bondRequest}>
        <Span>Solicitar Vínculo a Laboratório</Span>
      </CardButton>
      <CardButton to={path.laboratories.addRequest}>
        <Span>Solicitar Criação de Laboratório</Span>
      </CardButton>
    </Container>
  );
};
export default MenuLaboratory;
