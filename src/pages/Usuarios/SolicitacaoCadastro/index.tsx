import React from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import Table from '../../../components/Table';
import { Container, Icon } from './styles';
import Title from '../../../components/Title';

const SolicitacaoCadastro: React.FC = () => {
  const Titles = ['Nome', 'E-mail', 'Status', 'Ação'];
  const Contents = [
    [
      'Belle Gonzales',
      'user@academico.ufs.br',
      'Pendente',
      <>
        <Icon>
          <FiThumbsUp />
        </Icon>
        <Icon>
          <FiThumbsDown />
        </Icon>
      </>,
    ],
    [
      'Benjamin Fuller',
      'user@academico.ufs.br',
      'Pendente',
      <>
        <Icon>
          <FiThumbsUp />
        </Icon>
        <Icon>
          <FiThumbsDown />
        </Icon>
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
