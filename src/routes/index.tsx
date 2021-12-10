import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Dashboard,
  Reagentes,
  CadastroReagentes,
  GerenciarReagentes,
  MenuUsuario,
  SolicitacaoCadastro,
  CadastrarLicenca,
  ListaReagentesCadastrados,
  EditarReagente,
  MenuLaboratorio,
  CadastrarLaboratorio,
} from '../pages';
import Menu from '../components/Menu';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Menu>
        <Route path="/dashboard" component={Dashboard} />

        <Route path="/reagentes" component={Reagentes} />
        <Route path="/cadastrar_reagentes" component={CadastroReagentes} />
        <Route path="/gerenciar_reagentes" component={GerenciarReagentes} />
        <Route path="/listar_reagentes" component={ListaReagentesCadastrados} />
        <Route path="/editar_reagente/:id" component={EditarReagente} />
        <Route path="/cadastrar_licenca" component={CadastrarLicenca} />

        <Route path="/usuarios" component={MenuUsuario} />
        <Route path="/solicitacao-cadastro" component={SolicitacaoCadastro} />

        <Route path="/laboratorios" component={MenuLaboratorio} />
        <Route path="/cadastrar_laboratorio" component={CadastrarLaboratorio} />
      </Menu>
    </Switch>
  );
};

export default Routes;
