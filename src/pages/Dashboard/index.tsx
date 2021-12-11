/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { FiPower, FiHome, FiUser } from 'react-icons/fi';
import { MdOutlineScience, MdWorkOutline} from 'react-icons/md';
import { GrDocumentText } from 'react-icons/gr';
import { GiChemicalDrop } from 'react-icons/gi';

import {
  DashboardItem,
  DashboardItemFull,
  DashboardItemFull1,
  Card,
  IconSpan,
} from './styles';

import Table from '../../components/Table';
import Title from '../../components/Title';
import grafico from '../../assets/validade2.png';
import gconsumo from '../../assets/consumo.png';


const DashboardReagentes: React.FC = ({ children }) => {
  return (
    <>
      <Title>Olá, Bem-Vindo</Title>
      <DashboardItem>
        <Card>
          <IconSpan>
            <FiUser />
          </IconSpan>
          <strong>Usuários</strong>
          <strong>1000</strong>

        </Card>
        <Card>
          <IconSpan>
            <MdOutlineScience />
          </IconSpan>
          <strong>Reagentes</strong>
          <strong>100</strong>
        </Card>
        <Card>
          <IconSpan>
            <GrDocumentText />
          </IconSpan>
          <strong>Licenças</strong>
          <strong>5</strong>
        </Card>
        <Card>
          <IconSpan>
            <GiChemicalDrop />
          </IconSpan>
          <strong>Consumo</strong>
          <strong>50L</strong>
        </Card>
      </DashboardItem>
      <DashboardItem>
        <DashboardItemFull>
          <strong>Consumo Mensal</strong>
          <img src={gconsumo} alt="consumo" />
        </DashboardItemFull>
        <DashboardItemFull1>
          <strong>Status da Validade</strong>
          <img src={grafico} alt="validade" />
        </DashboardItemFull1>
      </DashboardItem>
    </>
  );
};
export default DashboardReagentes;
