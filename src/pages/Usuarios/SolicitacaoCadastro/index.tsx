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
} from './styles';
import Title from '../../../components/Title';
import ButtonActions from '../../../components/ButtonActions';
import { ListUsersPending } from '../../../interfaces/usuarios';
import api from '../../../services/api';

const SolicitacaoCadastro: React.FC = () => {
  const [list, setList] = useState<ListUsersPending[]>([]);
  const [call, setCall] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (list.length === 0 && !call) {
      setLoading(true);
      api
        .post('/users/login', {
          email: 'admin@academico.ufs.br',
          password: 'admin',
        })
        .then(response => {
          api.defaults.headers.common['x-access-token'] =
            response.data.accessToken;
          api.get(`/users/list/pending`).then(listPending => {
            setList(listPending.data);
            setLoading(false);
            setCall(true);
          });
        });
    }
  }, []);

  const accept = (id: string, name: string): void => {
    const result = confirm(`Aceitar solicitação de cadastro de ${name}?`);
    if (result) {
      try {
        api.put(`/users/approve/${id}`).then(response => {
          console.log(response);
          if (response.status > 300)
            alert('Não foi possível realizar a operação.');
        });
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
      <Title>Solicitações de cadastro pendentes</Title>
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
export default SolicitacaoCadastro;
