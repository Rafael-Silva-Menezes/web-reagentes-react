import React, { useEffect, useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import api from '../../services/api';
import {
  DashboardContainer,
  DashboardItem,
  DashboardItemCol,
  DashboardItemFull,
  Card,
  Linker,
} from './styles';

interface InfoData {
  pendingRequestsNumber: number;
}

const Dashboard: React.FC = ({ children }) => {
  const [call, setCall] = useState(false);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<InfoData>();

  useEffect(() => {
    if (!call) {
      setLoading(true);
      getUsers();
      setCall(true);
    }
  }, [call]);

  const getUsers = (): void => {
    api.get(`/users/list/pending`).then(listUsers => {
      setInfo(prevState => ({
        ...prevState,
        pendingRequestsNumber: listUsers.data.length,
      }));
      setLoading(false);
    });
  };

  return (
    <DashboardContainer>
      <DashboardItem>
        <Linker to="/request_register">
          <Card>
            <FiUsers />
            <strong>{info?.pendingRequestsNumber || 0}</strong> solicitações de
            cadastro pendentes
          </Card>
        </Linker>
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
