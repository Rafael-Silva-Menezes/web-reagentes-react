/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useEffect, useCallback } from 'react';
import { FiEdit, FiTrash2, FiUsers } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { useToast } from '../../../hooks/toast';
import {
  Container,
  Table,
  TextId,
  TextName,
  TextNumber,
  Buttons,
  SearchContainer,
  Loading,
} from './styles';
import filterListByText from '../../../utils/filterListByText';
import { path } from '../../../routes';
import Title from '../../../components/Title';
import ButtonActions from '../../../components/ButtonActions';
import SearchInput from '../../../components/SearchInput';
import api from '../../../services/api';

const ManageLaboratory: React.FC = () => {
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
      api.get('laboratories/list').then(response => {
        console.log(response.data);
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

  const deleteByCode = useCallback(
    (code: string, reagent: string): void => {
      const result = confirm(`Deseja realmente excluir o reagente ${reagent}?`);
      // if (result) {
      //   try {
      //     api.get('laboratories/list').then(response => {
      //       if (response.status > 300)
      //         alert('Não foi possível realizar a operação.');
      //     });
      //   } catch (err) {
      //     alert(err);
      //   }
      // }
      // history.push(path.laboratories.manage);
    },
    [history],
  );

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
      <Title>Gerenciamento de Laboratórios</Title>
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
                <TextNumber>{item.department.name}</TextNumber>
                <Buttons>
                  <div>
                    <ButtonActions
                      icon={FiUsers}
                      to={`${path.laboratories.bonds}/${item.code}`}
                    />
                    <ButtonActions
                      icon={FiEdit}
                      to={`${path.laboratories.edit}/${item.code}`}
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

export default ManageLaboratory;
