import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Menu from '../components/Menu';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Menu>
        <Route path="/dashboard" component={Dashboard} />
      </Menu>
    </Switch>
  );
};

export default Routes;
