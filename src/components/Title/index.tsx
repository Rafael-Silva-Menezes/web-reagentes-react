/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { TitleStyle } from './styles';

const Title: React.FC = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>;
};

export default Title;
