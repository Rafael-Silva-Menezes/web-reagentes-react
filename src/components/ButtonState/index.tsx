import React from 'react';
import { Container } from './styles';

interface ButtonProps {
  onClick: any;
}

const ButtonState: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Container type="button" onClick={onClick}>
      Solicitar
    </Container>
  );
};

export default ButtonState;
