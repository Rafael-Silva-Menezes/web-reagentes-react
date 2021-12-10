import React from 'react';

import { TitleStyle } from './styles';

const Title: React.FC = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>;
};

export default Title;
