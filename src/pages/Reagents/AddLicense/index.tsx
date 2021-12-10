/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import getValidationErrors from '../../../utils/getValidationErrors';
import { Content } from './styles'

interface FormData {
  number: string;
  validity: string;
  registrationDate: string;
  socialReason: string;
  fantasyName: string;
  address: string;
  primaryCNA: string;
  secondaryCNA: string;
  crc: string;
}

const AddLicense: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          number: Yup.string().required('Número obrigatório'),
          validity: Yup.string().required('Validade obrigatória'),
          registrationDate: Yup.string().required('Data de Registro obrigatória'),
          socialReason: Yup.string().required('Razão Social obrigatória'),
          fantasyName: Yup.string().required('Nome Fantasia obrigatório'),
          address: Yup.string().required('Endereço obrigatório'),
          primaryCNA: Yup.string().required('CNA Primário obrigatório'),
          secondaryCNA: Yup.string().required('CNA Secundário obrigatório'),
          crc: Yup.string().required('CRC obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });


        history.push('/listBranch');
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
      <Title>Cadastro de licença de reagentes</Title>
      <Form onSubmit={handleSubmit}>
        <Content>
          <tr>
            <td><Input name="number" placeholder="Número" /></td>
            <td><Input name="validity" placeholder="Vencimento" /></td>
          </tr>
          <tr>
            <td><Input name="socialReason" placeholder="Razão Social" /></td>
            <td><Input name="fantasyName" placeholder="Nome Fantasia" /></td>
          </tr>
          <tr>
            <td colSpan={2}><Input name="address" placeholder="Endereço" /></td>
          </tr>
          <tr>
            <td><Input name="cnpj" placeholder="CNPJ" /></td>
            <td><Input name="crc" placeholder="CRC" /></td>
          </tr>
          <tr>
            <td><Input name="primaryCNA" placeholder="CNA Principal" /></td>
            <td><Input name="secondaryCNA" placeholder="CNA Secundário" /></td>
          </tr>
          <tr>
            <td colSpan={2}><Button type="submit">Cadastrar</Button></td>
          </tr>
        </Content>
      </Form>
    </>
  );
};

export default AddLicense;
