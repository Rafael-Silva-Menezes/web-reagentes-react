/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { FiPower, FiHome, FiUser } from 'react-icons/fi';
import { MdOutlineScience, MdWorkOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  Admin,
  Header,
  Aside,
  MenuContainer,
  MenuButtonContent,
  Logo,
  Main,
  Toolbar,
  Title,
  Logout,
  Profile,
  Icon,
} from './styles';

import logoImg from '../../assets/logo.png';
import profileImg from '../../assets/profile.jpg';

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
          <Profile>
            <Logout to="/">
              <FiPower />
            </Logout>

            <div>
              <Link to="/profile">
                <strong>Usuário</strong>
              </Link>
              <img src={profileImg} alt="Profile" />
            </div>
          </Profile>
        </Toolbar>
      </Header>
      <Aside>
        <Logo src={logoImg} alt="Reagentes" />
        <MenuContainer>
          {menu.map(item => (
            <li>
              <MenuButtonContent to={item.url}>
                <Icon>{item.icon}</Icon>
                <p>{item.title}</p>
              </MenuButtonContent>
            </li>
          ))}
        </MenuContainer>
      </Aside>
      <Main>{children}</Main>
    </Admin>
  );
};
export default Dashboard;
