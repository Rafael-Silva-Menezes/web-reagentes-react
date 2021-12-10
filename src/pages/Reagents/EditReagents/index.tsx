import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { FiArrowLeft } from 'react-icons/fi';
import getValidationErrors from '../../../utils/getValidationErrors';

import { ParamTypes } from '../../../interfaces/params';
import { Content, Header } from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

interface FormData {
  name: string;
  code: string;
}

const EditReagents: React.FC = ({ children }) => {
  const formRef = useRef<FormHandles>(null);
  const { id } = useParams<ParamTypes>();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome do reagente é obrigatório'),
          code: Yup.string().required('Código é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/list_reagents');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [history, id],
  );

  return (
    <>
      <Title>Edição de Reagente</Title>
      <Header>
        <Link to="/list_reagents">
          <FiArrowLeft size={40} />
        </Link>
      </Header>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <Input name="code" placeholder="Código" />
          <Button type="submit">Editar</Button>
        </Form>
      </Content>
    </>
  );
};

export default EditReagents;
