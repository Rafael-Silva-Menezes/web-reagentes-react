import React, { useEffect, useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import {
  MdOutlineScience,
  MdWorkOutline,
  MdDocumentScanner,
} from 'react-icons/md';
import ButtonActions from '../../components/ButtonActions';
import { path } from '../../routes';
import api from '../../services/api';
import {
  DashboardContainer,
  DashboardItem,
  DashboardItemCol,
  DashboardItemFull,
  Card,
  Linker,
  Table,
  TextId,
  TextName,
  TextNumber,
} from './styles';

const Dashboard: React.FC = ({ children }) => {
  const [call, setCall] = useState(false);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState();
  const [numberRequestUser, setNumberRequestUser] = useState(0);
  const [numberRequestLab, setNumberRequestLab] = useState(0);
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    if (!call) {
      setLoading(true);
      getUsers();
      getLaboratories();
      getReagents();
      setCall(true);
    }
  }, [call]);

  const getUsers = (): void => {
    api.get(`/users/list/pending`).then(listUsers => {
      setNumberRequestUser(listUsers.data.length);
      setLoading(false);
    });
  };

  const getLaboratories = (): void => {
    api.get('laboratories/list?status=pending').then(response => {
      setNumberRequestLab(response.data.length);
      setLoading(false);
    });
  };

  const getReagents = (): void => {
    api.get(`/reagents/list`).then(response => {
      setList(response.data);
      setLoading(false);
    });
  };

  return (
    <DashboardContainer>
      <DashboardItem>
        <Linker to="/request_register">
          <Card>
            <FiUsers />
            <strong>{numberRequestUser}</strong> solicitações de cadastro
            pendentes
          </Card>
        </Linker>
      </DashboardItem>
      <DashboardItem>
        <Linker to={path.laboratories.manageAddRequest}>
          <Card>
            <MdWorkOutline />
            <strong>{numberRequestLab}</strong> solicitações de criação de
            laboratório
          </Card>
        </Linker>
      </DashboardItem>
      <DashboardItemFull>
        <Linker to="/list_reagents">
          <Card>
            <h3>Reagentes Licenciados</h3>
            <Table>
              {list.map(item => (
                <tr>
                  <TextId>{item.code}</TextId>
                  <TextName>{item.name}</TextName>
                  <TextNumber>
                    {item.controlled ? 'Controlado' : 'Não-Controlado'}
                  </TextNumber>
                </tr>
              ))}
            </Table>
          </Card>
        </Linker>
      </DashboardItemFull>
      {/* <DashboardItemCol>
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
      </DashboardItemCol> */}
    </DashboardContainer>
  );
};
export default Dashboard;
