import React, { useState, useEffect } from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
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
import { useToast } from '../../../hooks/toast';
import { path } from '../../../routes';

const BondRequest: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [filterList, setFilterList] = useState<any[]>([]);
  const [call, setCall] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();
  const history = useHistory();

  useEffect(() => {
    if (list.length === 0 && !call) {
      setLoading(true);
      getLaboratories();
      setCall(true);
    }
  }, [call, list.length]);

  const getLaboratories = (): void => {
    try {
      api.get('laboratories/list?status=pending').then(response => {
        if (response.status > 300)
          addToast({
            type: 'error',
            title: 'Erro',
            description: 'Ocorreu um erro ao listar os laboratórios',
          });
        setList(response.data);
        setFilterList(response.data);
        setLoading(false);
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro',
        description: 'Ocorreu um erro ao listar os laboratórios',
      });
    }
  };

  const accept = (id: string, name: string): void => {
    const result = confirm(`Criar laboratório ${name}?`);
    if (result) {
      try {
        api.patch(`laboratories/request/${id}?approve=true`).then(response => {
          if (response.status > 300)
            addToast({
              type: 'error',
              title: 'Erro',
              description: 'Ocorreu um erro ao criar o laboratório',
            });
          addToast({
            type: 'success',
            title: 'Sucesso!',
            description: 'Laboratório criado com sucesso!',
          });
          history.push(path.laboratories.manage);
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Ocorreu um erro ao criar o laboratório',
        });
      }
    }
  };

  const deny = (id: string, name: string): void => {
    const result = confirm(`Excluir a solicitação de cadastro de ${name}?`);
    if (result) {
      try {
        api.patch(`laboratories/request/${id}?approve=false`).then(response => {
          if (response.status > 300)
            addToast({
              type: 'error',
              title: 'Erro',
              description: 'Ocorreu um erro ao excluir a solicitação',
            });
          addToast({
            type: 'success',
            title: 'Sucesso!',
            description: 'Solicitação de cadastro negada com sucesso!',
          });
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Ocorreu um erro ao excluir a solicitação',
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === '') setFilterList(list);
    else
      setFilterList(
        filterListByText({
          list,
          fieldsToSearch: ['name', 'status', 'code'],
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
            {filterList.map(item => (
              <tr key={item.code}>
                <TextId>{item.code}</TextId>
                <TextName>{item.name}</TextName>
                <TextNumber>{item.department.name}</TextNumber>
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
