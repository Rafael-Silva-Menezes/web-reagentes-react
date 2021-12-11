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
import BondManage from '../pages/Laboratories/BondManage';

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
        <Route path="/laboratories" isPrivate component={MenuLaboratory} />
        <Route path="/add_laboratory" isPrivate component={AddLaboratories} />
        <Route
          path="/manage_laboratory"
          isPrivate
          component={ManageLaboratory}
        />
        <Route path="/bond_request" isPrivate component={BondRequest} />
        <Route
          path="/edit_laboratory/:id"
          isPrivate
          component={EditLaboratory}
        />
        <Route path="/bond_manage/:id" isPrivate component={BondManage} />
      </Menu>
    </Switch>
  );
};

export default Routes;
