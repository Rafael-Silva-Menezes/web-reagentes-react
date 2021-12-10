import React from 'react';
import { FiEdit, FiTrash2, FiUsers } from 'react-icons/fi';
import { Container, Table, TextId, TextName, Buttons } from './styles';
import Title from '../../../components/Title';
import ButtonActions from '../../../components/ButtonActions';

const ListReagentsRegistered: React.FC = () => {
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

  const deleteByCode = (code: string, reagent: string): void => {
    const result = confirm(`Deseja realmente excluir o reagente ${reagent}?`);
    if (result) {
      // try {
      //   api.put(`/users/approve/${id}`).then(response => {
      //     console.log(response);
      //     if (response.status > 300)
      //       alert('Não foi possível realizar a operação.');
      //   });
      // } catch (err) {
      //   alert(err);
      // }
    }
  };

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
                    to={`/edit_reagent/${item.code}`}
                  />
                  <ButtonActions
                    color="#081a51"
                    icon={FiTrash2}
                    onClick={() => {
                      deleteByCode(item.code, item.reagent);
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
export default ListReagentsRegistered;
