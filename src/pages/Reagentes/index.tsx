import React from 'react';
import {
  ReagentesContainer,
  ReagentesCardButton,
  ReagentesSpan,
} from './styles';

const Reagentes: React.FC = ({ children }) => {
  return (
    <ReagentesContainer>
      <ReagentesCardButton to="/cadastrar_licenca">
        <ReagentesSpan>Cadastrar Licença</ReagentesSpan>
      </ReagentesCardButton>
      <ReagentesCardButton to="/cadastrar_reagentes">
        <ReagentesSpan>Cadastrar Reagentes Controlados</ReagentesSpan>
      </ReagentesCardButton>
      <ReagentesCardButton to="/listar_reagentes">
        <ReagentesSpan>Gerenciar Reagentes Controlados</ReagentesSpan>
      </ReagentesCardButton>
    </ReagentesContainer>
  );
};
export default Reagentes;
