import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import api from './services/api';

import GlobalStyle from './styles/globals';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
};

export default App;
