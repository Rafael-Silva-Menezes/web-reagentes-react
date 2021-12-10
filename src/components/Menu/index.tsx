import React from 'react';
import { FiPower, FiHome, FiUser } from 'react-icons/fi';
import {
  MdOutlineScience,
  MdWorkOutline,
  MdDocumentScanner,
} from 'react-icons/md';
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
import { useAuth } from '../../hooks/auth';

const Menu: React.FC = ({ children }) => {
  const { signOut } = useAuth();
  const nav = [
    { title: 'Página Principal', url: '/dashboard', icon: <FiHome /> },
    { title: 'Laboratórios', url: '/laboratories', icon: <MdWorkOutline /> },
    { title: 'Usuários', url: '/users', icon: <FiUser /> },
    { title: 'Reagentes', url: '/reagents', icon: <MdOutlineScience /> },
    { title: 'Relatórios', url: '/reports ', icon: <MdDocumentScanner /> },
  ];

  return (
    <Admin>
      <Header>
        <Toolbar>
          <Title />
          <Profile>
            <Logout type="button" onClick={signOut}>
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
          {nav.map(item => (
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
export default Menu;
