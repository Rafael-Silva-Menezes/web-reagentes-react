import React from 'react';
import { FiEdit, FiTrash2, FiUsers } from 'react-icons/fi';
import {
  Container,
  Table,
  TextId,
  TextName,
  Buttons,
  TextNumber,
} from './styles';
import Title from '../../../components/Title';
import ButtonActions from '../../../components/ButtonActions';

const ListaLaboratorios: React.FC = () => {
  const content = [
    {
      campus: 'Aracaju',
      department: 'Química',
      name: 'Química A',
      code: '1',
    },
    {
      campus: 'Aracaju',
      department: 'Química',
      name: 'Química B',
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
              <TextId>{item.campus}</TextId>
              <TextName>{item.name}</TextName>
              <TextNumber>{item.department}</TextNumber>
              <Buttons>
                <div>
                  <ButtonActions
                    icon={FiEdit}
                    // to={`/editar_reagente/${item.code}`}
                    onClick={() => {
                      // deleteByCode(item.code, item.reagent);
                    }}
                  />
                  <ButtonActions
                    color="#081a51"
                    icon={FiTrash2}
                    onClick={() => {
                      // deleteByCode(item.code, item.reagent);
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
export default ListaLaboratorios;
