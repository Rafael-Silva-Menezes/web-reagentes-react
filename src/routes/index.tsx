import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';

import ForgotPassword from '../pages/Authentication/ForgotPassword';
import ResetPassword from '../pages/Authentication/ResetPassword';
import Dashboard from '../pages/Dashboard';
import Menu from '../components/Menu';
import Reagents from '../pages/Reagents';
import AddReagents from '../pages/Reagents/AddReagents';
import ManageReagents from '../pages/Reagents/ManageReagents';
import ListReagentsRegistered from '../pages/Reagents/ListReagentsRegistered';
import EditReagents from '../pages/Reagents/EditReagents';
import AddLicense from '../pages/Reagents/AddLicense';
import MenuUsers from '../pages/Users';
import RegistrationRequest from '../pages/Users/RegistrationRequest';
import MenuLaboratory from '../pages/Laboratories';
import ManageLaboratory from '../pages/Laboratories/ManageLaboratory';
import AddLaboratories from '../pages/Laboratories/AddLaboratories';
import EditLaboratory from '../pages/Laboratories/EditLaboratory';
import BondRequest from '../pages/Laboratories/BondRequest';
import ManageLaboratoryBonds from '../pages/Laboratories/ManageLaboratoryBonds';

export const path = {
  laboratories: {
    menu: '/laboratories',
    add: '/add_laboratory',
    manage: '/manage_laboratory',
    edit: '/edit_laboratory',
    bond: '/manage_laboratory_bonds',
  },
};

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Menu>
        <Route path="/dashboard" isPrivate component={Dashboard} />
        <Route path="/reagents" isPrivate component={Reagents} />
        <Route path="/add_reagents" isPrivate component={AddReagents} />
        <Route
          path="/gerenciar_reagents"
          isPrivate
          component={ManageReagents}
        />
        <Route
          path="/list_reagents"
          isPrivate
          component={ListReagentsRegistered}
        />
        <Route path="/edit_reagent/:id" isPrivate component={EditReagents} />
        <Route path="/add_license" isPrivate component={AddLicense} />
        <Route path="/users" isPrivate component={MenuUsers} />
        <Route
          path="/request_register"
          isPrivate
          component={RegistrationRequest}
        />
        <Route
          path={path.laboratories.menu}
          isPrivate
          component={MenuLaboratory}
        />
        <Route
          path={path.laboratories.add}
          isPrivate
          component={AddLaboratories}
        />
        <Route
          path={path.laboratories.manage}
          isPrivate
          component={ManageLaboratory}
        />
        <Route path="/bond_request" isPrivate component={BondRequest} />
        <Route
          path={`${path.laboratories.edit}/:id`}
          isPrivate
          component={EditLaboratory}
        />
        <Route
          path={`${path.laboratories.bond}/:id`}
          isPrivate
          component={ManageLaboratoryBonds}
        />
      </Menu>
    </Switch>
  );
};

export default Routes;
