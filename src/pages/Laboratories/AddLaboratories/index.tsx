import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';

import { path } from '../../../routes';
import { Content, Header } from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

interface FormData {
  department: string;
  name: string;
  code: string;
}

const AddLaboratory: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          department: Yup.string().required(
            'Nome do departamento é obrigatório',
          ),
          name: Yup.string().required('Nome do laboratório é obrigatório'),
          code: Yup.string().required('Código é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        console.log(JSON.stringify(data));

        //

        history.push(path.laboratories.manage);
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
          <Input name="department" placeholder="Departamento" />
          <Input name="name" placeholder="Nome do Laboratório" />
          <Input name="code" placeholder="Código do Laboratório" />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </>
  );
};

export default AddLaboratory;
