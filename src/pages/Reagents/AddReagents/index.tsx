/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */
import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { useToast } from '../../../hooks/toast';

import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';

import { Container, Span, ButtonFinish } from './styles';
import {
  Buttons,
  Table,
  TextId,
  TextName,
  TextNumber,
} from '../../Laboratories/ManageAddRequest/styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ButtonActions from '../../../components/ButtonActions';

interface AddReagentsData {
  name: string;
  code: string;
  controlled: true;
}

const AddReagents: React.FC = ({ children }) => {
  const formRef = useRef<FormHandles>(null);
  const [arrayReagents, setArrayReagents] = useState<AddReagentsData[]>([]);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: AddReagentsData) => {
      try {
        formRef.current?.setErrors({});
        data.controlled = true;

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          code: Yup.string().required('Código obrigatório'),
          controlled: Yup.boolean(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const arrayAux = arrayReagents;
        arrayAux.push(data);
        setArrayReagents(arrayAux);

        addToast({
          type: 'success',
          title: 'Reagente adicionado',
          description: 'Seu Reagente foi adicionado',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao cadastrar reagente, tente novamente',
        });
      }
    },
    [addToast, arrayReagents],
  );

  const sendReagentsForApi = async () => {
    console.log(arrayReagents);
    const response = await api.post('/reagents/add', {
      reagents: arrayReagents,
    });
    console.log(response);
    history.push('/');
  };

  return (
    <Container>
      <Span>
        <h2>Cadastrar Reagentes</h2>
      </Span>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome do reagente" />

        <Input name="code" placeholder="Código do reagente" />

        <Button type="submit">Adicionar</Button>
      </Form>
      <Button type="submit" onClick={() => sendReagentsForApi()}>
        Finalizar Cadastro
      </Button>

      <Table>
        {arrayReagents.map(item => (
          <tr key={item.code}>
            <TextId>{item.code}</TextId>
            <TextName>{item.name}</TextName>
            <TextNumber>Campus {item.controlled}</TextNumber>
            <Buttons>
              <div>
                <ButtonActions
                  icon={FiThumbsUp}
                  onClick={() => {
                    console.log('oi');
                  }}
                />
                <ButtonActions
                  color="#081a51"
                  icon={FiThumbsDown}
                  onClick={() => {
                    console.log('oi');
                  }}
                />
              </div>
            </Buttons>
          </tr>
        ))}
      </Table>
    </Container>
  );
};

export default AddReagents;
