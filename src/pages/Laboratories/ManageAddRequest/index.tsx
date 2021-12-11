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
import filterListByText from '../../../utils/filterListByText';
import api from '../../../services/api';

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
    code: '2',
  },
];

const BondRequest: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [filterList, setFilterList] = useState<any[]>([]);
  const [call, setCall] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (list.length === 0 && !call) {
      // setLoading(true);
      setList(content);
      setCall(true);
      // api
      //   .post('/users/login', {
      //     email: 'admin@academico.ufs.br',
      //     password: 'admin',
      //   })
      //   .then(response => {
      //     api.defaults.headers.common['x-access-token'] =
      //       response.data.accessToken;
      //     api.get(`/users/list/pending`).then(listPending => {
      //       setList(listPending.data);
      //       setLoading(false);
      //       setCall(true);
      //     });
      //   });
    }
  }, [call, list.length]);

  const accept = (id: string, name: string): void => {
    const result = confirm(`Aceitar solicitação de cadastro de ${name}?`);
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

  const deny = (id: string, name: string): void => {
    const result = confirm(
      `Deseja realmente negar a solicitação de cadastro de ${name}?`,
    );
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
          fieldsToSearch: ['campus', 'department', 'name', 'code'],
          filter: e.target.value,
        }),
      );
  };

  return (
    <>
      <Title>Solicitações de Cadastro de Laboratório</Title>
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
            {list.map(item => (
              <tr key={item.id}>
                <TextId>{item.department}</TextId>
                <TextName>{item.name}</TextName>
                <TextNumber>Campus {item.campus}</TextNumber>
                <Buttons>
                  <div>
                    <ButtonActions
                      icon={FiThumbsUp}
                      onClick={() => {
                        accept(item.code, item.name);
                      }}
                    />
                    <ButtonActions
                      color="#081a51"
                      icon={FiThumbsDown}
                      onClick={() => {
                        deny(item.code, item.name);
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
export default BondRequest;
