import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
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

const AddLaboratories: React.FC = ({ children }) => {
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

        //

        history.push('/listar_reagentes');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [history],
  );

  return (
    <>
      <Title>Cadastro de Laboratório</Title>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="campus" placeholder="Campus" />
          <Input name="department" placeholder="Departamento" />
          <Input name="name" placeholder="Nome" />
          <Input name="laboratoryCode" placeholder="Código do Laboratório" />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </>
  );
};

export default AddLaboratories;
