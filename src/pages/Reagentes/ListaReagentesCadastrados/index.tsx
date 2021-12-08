import React from 'react';
import { FiEdit, FiTrash2, FiUsers } from 'react-icons/fi';
import { Container, Table, TextId, TextName, Buttons } from './styles';
import Title from '../../../components/Title';
import ButtonActions from '../../../components/ButtonActions';

const ListaReagentesCadastrados: React.FC = () => {
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
      <Title>Reagentes Licenciados</Title>
      <Container>
        <Table>
          {content.map(item => (
            <tr>
              <TextId>{item.code}</TextId>
              <TextName>{item.reagent}</TextName>
              <Buttons>
                <div>
                  <ButtonActions
                    icon={FiEdit}
                    to={`/editar_reagente/${item.code}`}
                  />
                  <ButtonActions
                    color="#081a51"
                    icon={FiTrash2}
                    onClick={() => {
                      console.log('click');
                    }}
                  />
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
