/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { FiPower, FiHome, FiUser } from 'react-icons/fi';
import { MdOutlineScience, MdWorkOutline } from 'react-icons/md';
import {
  Admin,
  Header,
  Aside,
  MenuContainer,
  MenuButton,
  MenuButtonContent,
  Logo,
  Main,
  Toolbar,
  Title,
  Logout,
  Icon,
} from './styles';

import logoImg from '../../assets/logo.png';

const Dashboard: React.FC = ({ children }) => {
  const menu = [
    { title: 'Página Principal', url: '/dashboard', icon: <FiHome /> },
    { title: 'Laboratórios', url: '/', icon: <MdWorkOutline /> },
    { title: 'Usuários', url: '/', icon: <FiUser /> },
    { title: 'Reagentes', url: '/s', icon: <MdOutlineScience /> },
  ];

  return (
    <Admin>
      <Header>
        <Toolbar>
          <Title>Página Principal</Title>
          <Logout to="/">
            <FiPower />
          </Logout>
        </Toolbar>
      </Header>
      <Aside>
        <Logo src={logoImg} alt="Reagentes" />
        <MenuContainer>
          {menu.map(item => (
            <MenuButton>
              <MenuButtonContent to={item.url}>
                <Icon>{item.icon}</Icon>
                <p>{item.title}</p>
              </MenuButtonContent>
            </MenuButton>
          ))}
        </MenuContainer>
      </Aside>
      <Main>{children}</Main>
    </Admin>
  );
};
export default Dashboard;
