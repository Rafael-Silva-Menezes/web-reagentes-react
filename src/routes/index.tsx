import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
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
import AddLaboratories from '../pages/Laboratories/AddLaboratories';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Menu>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/reagents" component={Reagents} />
        <Route path="/add_reagents" component={AddReagents} />
        <Route path="/gerenciar_reagents" component={ManageReagents} />
        <Route path="/list_reagents" component={ListReagentsRegistered} />
        <Route path="/edit_reagent/:id" component={EditReagents} />
        <Route path="/add_license" component={AddLicense} />
        <Route path="/users" component={MenuUsers} />
        <Route path="/request_register" component={RegistrationRequest} />
        <Route path="/laboratories" component={MenuLaboratory} />
        <Route path="/add_laboratory" component={AddLaboratories} />
      </Menu>
    </Switch>
  );
};

export default Routes;
