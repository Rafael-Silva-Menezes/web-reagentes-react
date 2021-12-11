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
import { path } from '../../../routes';

interface FormData {
  campus: string;
  department: string;
  name: string;
  code: string;
}

const EditLaboratory: React.FC = ({ children }) => {
  const formRef = useRef<FormHandles>(null);
  const { id } = useParams<ParamTypes>();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          code: Yup.string().required('Código é obrigatório'),
          campus: Yup.string().required('Campus é obrigatório'),
          department: Yup.string().required('Departamento é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

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
      <Title>Edição de Reagente</Title>
      <Header>
        <Link to={path.laboratories.manage}>
          <FiArrowLeft size={40} />
        </Link>
      </Header>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <Input name="code" placeholder="Código" />
          <Input name="department" placeholder="Departamento" />
          <Input name="campus" placeholder="Campus" />
          <Button type="submit">Editar</Button>
        </Form>
      </Content>
    </>
  );
};

export default EditLaboratory;
