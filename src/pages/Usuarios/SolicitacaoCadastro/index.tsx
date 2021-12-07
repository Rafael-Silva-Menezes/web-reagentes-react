import React from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import {
  Container,
  Accept,
  Decline,
  Table,
  TextId,
  TextName,
  TextNumber,
  Buttons,
} from './styles';
import Title from '../../../components/Title';
import ButtonActions from '../../../components/ButtonActions';

const SolicitacaoCadastro: React.FC = () => {
  const Titles = ['Nome', 'E-mail', 'Status', 'Ação'];
  const content = [
    {
      name: 'Belle Gonzales',
      email: 'user@academico.ufs.br',
      status: 'Pendente',
      actions: (
        <>
          <Accept />
          <Decline />
        </>
      ),
    },
    {
      name: 'Benjamin Fuller',
      email: 'user@academico.ufs.br',
      status: 'Pendente',
      actions: (
        <>
          <Accept />
          <Decline />
        </>
      ),
    },
  ];

  return (
    <>
      <Title>Solicitações de cadastro pendentes</Title>
      <Container>
        <Table>
          {content.map(item => (
            <tr>
              <TextId>{item.email}</TextId>
              <TextName>{item.name}</TextName>
              <TextNumber>{item.status}</TextNumber>
              <Buttons>
                <div>
                  <ButtonActions icon={FiThumbsUp} to="#" />
                  <ButtonActions color="#081a51" icon={FiThumbsDown} to="#" />
                </div>
              </Buttons>
            </tr>
          ))}
        </Table>
      </Container>
    </>
  );
};
export default SolicitacaoCadastro;
