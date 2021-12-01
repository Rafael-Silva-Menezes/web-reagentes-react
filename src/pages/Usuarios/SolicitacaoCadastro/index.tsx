import React from 'react';
import Table from '../../../components/Table';
import { Container, Accept, Decline } from './styles';
import Title from '../../../components/Title';

const SolicitacaoCadastro: React.FC = () => {
  const Titles = ['Nome', 'E-mail', 'Status', 'Ação'];
  const Contents = [
    [
      'Belle Gonzales',
      'user@academico.ufs.br',
      'Pendente',
      <>
        <Accept />
        <Decline />
      </>,
    ],
    [
      'Benjamin Fuller',
      'user@academico.ufs.br',
      'Pendente',
      <>
        <Accept />
        <Decline />
      </>,
    ],
  ];

  return (
    <>
      <Title>Solicitações de cadastro pendentes</Title>
      <Container>
        <Table title={Titles} content={Contents} />
      </Container>
    </>
  );
};
export default SolicitacaoCadastro;
