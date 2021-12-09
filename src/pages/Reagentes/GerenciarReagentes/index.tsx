import React from 'react';
import { Button,Container,ContainerButton} from './styles';

const GerenciarReagentes: React.FC = ({ children }) => {
    return (
        <ContainerButton>
        <Button>Licenças</Button>
        <Button>Reagentes</Button>
        </ContainerButton>
    );
  };

export default GerenciarReagentes;