import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Reagentes from '../pages/Reagentes';
import CadastroReagentes from '../pages/Reagentes/CadastroReagentes';
import GerenciarReagentes from '../pages/Reagentes/GerenciarReagentes';
import Menu from '../components/Menu';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Menu>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/reagentes" component={Reagentes} />
        <Route path="/cadastro_reagentes" component={CadastroReagentes} />
        <Route path="/gerenciar_reagentes" component={GerenciarReagentes} />
      </Menu>
    </Switch>
  );
};

export default Routes;
