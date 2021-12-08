import React from 'react';
import { FiEdit, FiTrash2, FiUsers } from 'react-icons/fi';
import { Container, Table, TextId, TextName, Buttons } from './styles';
import Title from '../../../components/Title';
import ButtonActions from '../../../components/ButtonActions';

const ListaReagentesCadastrados: React.FC = () => {
  const Titles = ['Nome', 'E-mail', 'Status', 'Ação'];
  const content = [
    {
      reagent: 'Acetona',
      code: '1AH231L',
      type: 'Controlado',
    },
    {
      reagent: 'Ácido Fosfórico',
      code: 'A15S3P0',
      type: 'Controlado',
    },
  ];

  return (
    <>
      <Title>Solicitações de cadastro pendentes</Title>
      <Container>
        <Table>
          {content.map(item => (
            <tr>
              <TextId>{item.code}</TextId>
              <TextName>{item.reagent}</TextName>
              <Buttons>
                <div>
                  {/* <ButtonActions icon={FiEdit} to="#" />
                  <ButtonActions color="#081a51" icon={FiTrash2} to="#" /> */}
                </div>
              </Buttons>
            </tr>
          ))}
        </Table>
      </Container>
    </>
  );
};
export default ListaReagentesCadastrados;
