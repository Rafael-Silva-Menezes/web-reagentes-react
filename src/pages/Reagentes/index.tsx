import React from 'react';
import { ReagentesContainer, ReagentesCardButton, ReagentesSpan } from './styles';


const Reagentes: React.FC = ({ children }) => {
    return (
        <ReagentesContainer>
            <ReagentesCardButton href="/cadastro_reagentes">
                <ReagentesSpan>
                Cadastrar Reagentes Controlados
                </ReagentesSpan>
            </ReagentesCardButton>
            <ReagentesCardButton href="/gerenciar_reagentes">
                <ReagentesSpan>
                Gerenciar Reagentes Controlados
                </ReagentesSpan>
            </ReagentesCardButton>

        </ReagentesContainer>

    
    );
  };
  export default Reagentes;