/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Link } from 'react-router-dom';

import { FiClock } from 'react-icons/fi';
import {
  Admin,
  Header,
  SideMenu,
  SideMenuOptions,
  Logo,
  Main,
  Footer,
  Toolbar,
  Item,
  Alink,
  Ticker,
  TickerItem,
  Title,
} from './styles';

import logoImg from '../../assets/logo.png';

const Dashboard: React.FC = ({ children }) => {
  const menu = [
    { title: 'Página Principal', url: '/dashboard', icon: { FiClock } },
    { title: 'Laboratórios', url: '/', icon: '' },
    { title: 'Usuários', url: '/', icon: '' },
    { title: 'Reagentes', url: '/reagentes', icon: '' },
  ];

  return (
    <Admin>
      <Header>
        <Title>Página Principal</Title>
        <Toolbar>
          <button className="btn btn--primary">Add New Plumbus</button>
          {/* <a href="#" className="logout"> */}
          Log Out
          {/* </a> */}
        </Toolbar>
      </Header>
      <SideMenu>
        <Logo src={logoImg} alt="Reagentes" />
        <SideMenuOptions>
          {menu.map(item => (
            <Item>
              <Link to={item.url}>
                <Alink>{item.title}</Alink>
              </Link>
            </Item>
          ))}
        </SideMenuOptions>
      </SideMenu>
      <Main>{children}</Main>
      <Footer>
        <Ticker>
          <TickerItem>Grupo 5 - Reagentes Químicos</TickerItem>
        </Ticker>
        <span>&copy; Universidade Federal de Sergipe</span>
      </Footer>
    </Admin>
  );
};
export default Dashboard;
