/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiUsers } from 'react-icons/fi';
import Loader from 'react-loader-spinner';
import {
  Container,
  Table,
  TextId,
  TextName,
  Buttons,
  SearchContainer,
  Loading,
  TextNumber,
} from './styles';
import filterListByText from '../../../utils/filterListByText';
import SearchInput from '../../../components/SearchInput';
import Title from '../../../components/Title';
import ButtonActions from '../../../components/ButtonActions';
import api from '../../../services/api';

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

const ListaReagentesCadastrados: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [filterList, setFilterList] = useState<any[]>([]);
  const [call, setCall] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (list.length === 0 && !call) {
      setLoading(true);
      getReagents();
      setCall(true);
    }
  }, [call, list.length]);

  const getReagents = (): void => {
    api.get(`/reagents/list`).then(response => {
      setList(response.data);
      setFilterList(response.data);
      setLoading(false);
    });
  };

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === '') setFilterList(list);
    else
      setFilterList(
        filterListByText({
          list,
          fieldsToSearch: ['code', 'name'],
          filter: e.target.value,
        }),
      );
  };

  return (
    <>
      <Title>Reagentes Licenciados</Title>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Pesquisar"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e);
          }}
        />
      </SearchContainer>
      <Container>
        {loading ? (
          <Loading>
            <Loader
              type="BallTriangle"
              color="#081a51"
              height={80}
              width={80}
            />
          </Loading>
        ) : (
          <Table>
            {filterList.map(item => (
              <tr>
                <TextId>{item.code}</TextId>
                <TextName>{item.name}</TextName>
                <TextNumber>
                  {item.controlled ? 'Controlado' : 'Não-Controlado'}
                </TextNumber>
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
        )}
      </Container>
    </>
  );
};
export default ListaReagentesCadastrados;
