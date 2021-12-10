/* eslint-disable react/require-default-props */
import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Link } from 'react-router-dom';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
  onClick?: any;
  to?: string;
  color?: string;
};

const ButtonActions: React.FC<ButtonProps> = ({
  children,
  loading,
  icon: Icon,
  onClick,
  to,
  color,
  ...rest
}) => {
  return (
    <Link to={to}>
      <Container onClick={onClick} color={color} type="button" {...rest}>
        {loading ? 'Carregando...' : children}
        {Icon && <Icon size={20} />}
      </Container>
    </Link>
  );
};

export default ButtonActions;
