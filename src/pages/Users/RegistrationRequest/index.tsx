/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useEffect } from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import Loader from 'react-loader-spinner';
import {
  Container,
  Table,
  TextId,
  TextName,
  TextNumber,
  Buttons,
  Loading,
  SearchContainer,
} from './styles';
import Title from '../../../components/Title';
import ButtonActions from '../../../components/ButtonActions';
import SearchInput from '../../../components/SearchInput';
import api from '../../../services/api';
import filterListByText from '../../../utils/filterListByText';

const RegistrationRequest: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [filterList, setFilterList] = useState<any[]>([]);
  const [call, setCall] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (list.length === 0 && !call) {
      setLoading(true);
      getUsers();
      setCall(true);
    }
  }, [call, list.length]);

  const getUsers = (): void => {
    api.get(`/users/list/pending`).then(listPending => {
      setList(listPending.data);
      setFilterList(listPending.data);
      setLoading(false);
    });
  };

  const accept = (id: string, name: string): void => {
    const result = confirm(`Aceitar solicitação de cadastro de ${name}?`);
    if (result) {
      try {
        api.put(`/users/approve/${id}`).then(response => {
          console.log(response);
          if (response.status > 300)
            alert('Não foi possível realizar a operação.');
        });
        alert('Usuário aprovado com sucesso!');
        getUsers();
      } catch (err) {
        alert(err);
      }
    }
  };

  const deny = (id: string, name: string): void => {
    const result = confirm(
      `Deseja realmente negar a solicitação de cadastro de ${name}?`,
    );
    if (result) {
      try {
        api.delete(`/users/disapprove/${id}`).then(response => {
          if (response.status > 300)
            alert('Não foi possível realizar a operação.');
          alert('Solicitação negada com sucesso.');
          getUsers();
        });
      } catch (err) {
        alert(err);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === '') setFilterList(list);
    else
      setFilterList(
        filterListByText({
          list,
          fieldsToSearch: ['name', 'email', 'status'],
          filter: e.target.value,
        }),
      );
  };

  return (
    <>
      <Title>Solicitações de cadastro pendentes</Title>
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
              <tr key={item.id}>
                <TextId>{item.email}</TextId>
                <TextName>{item.name}</TextName>
                <TextNumber>{item.status}</TextNumber>
                <Buttons>
                  <div>
                    <ButtonActions
                      icon={FiThumbsUp}
                      onClick={() => {
                        accept(item.id, item.name);
                      }}
                    />
                    <ButtonActions
                      color="#081a51"
                      icon={FiThumbsDown}
                      onClick={() => {
                        deny(item.id, item.name);
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
export default RegistrationRequest;
