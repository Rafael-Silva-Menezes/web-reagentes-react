/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import {
  DashboardContainer,
  DashboardItem,
  DashboardItemCol,
  DashboardItemFull,
  Card,
} from './styles';

import Table from '../../components/Table';

const Dashboard: React.FC = ({ children }) => {
  return (
    <DashboardContainer>
      <DashboardItem>
        <Card>
          <strong>41</strong> Foobars
        </Card>
      </DashboardItem>
      <DashboardItem>
        <Card>
          <strong>81.712</strong> Doohickeys
        </Card>
      </DashboardItem>
      <DashboardItemFull>
        <Card>
          <img src="https://imgs.xkcd.com/comics/decline.png" alt="" />
        </Card>
      </DashboardItemFull>
      <DashboardItemCol>
        <Card>A</Card>
      </DashboardItemCol>
      <DashboardItemCol>
        <Card>B</Card>
      </DashboardItemCol>
      <DashboardItemCol>
        <Card>C</Card>
      </DashboardItemCol>
      <DashboardItemCol>
        <Card>D</Card>
      </DashboardItemCol>
    </DashboardContainer>
  );
};
export default Dashboard;
