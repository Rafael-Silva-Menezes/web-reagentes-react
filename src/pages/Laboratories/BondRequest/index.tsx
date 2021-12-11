/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';

import { path } from '../../../routes';
import { ParamTypes } from '../../../interfaces/params';
import { Content, Header } from './styles';
import ButtonState from '../../../components/ButtonState';
import Title from '../../../components/Title';
import InputSelect from '../../../components/InputSelect';

interface FormData {
  laboratory: string;
}

const content = [
  {
    key: 'Química',
    label: 'Química A',
    value: '1',
  },
  {
    key: 'Química',
    label: 'Química B',
    value: '2',
  },
];

const BondRequest: React.FC = ({ children }) => {
  const formRef = useRef<FormHandles>(null);
  const { id } = useParams<ParamTypes>();
  const [value, setValue] = useState('');
  const history = useHistory();

  const handleSubmit = (): void => {
    console.log(value);
  };

  return (
    <>
      <Title>Solicitação de Vínculo a Laboratório</Title>
      <Content>
        <InputSelect
          data={content}
          name="laboratory"
          value={value}
          onChange={(e: { target: { value: any } }) => {
            setValue(prev => (prev = e.target.value));
          }}
        />
        <ButtonState
          onClick={() => {
            handleSubmit();
          }}
        >
          Solicitar
        </ButtonState>
      </Content>
    </>
  );
};

export default BondRequest;
