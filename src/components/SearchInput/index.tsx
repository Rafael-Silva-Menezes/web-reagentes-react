import React, { InputHTMLAttributes, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  onChange: any;
  placeholder: string;
}
const Input: React.FC<InputProps> = ({ icon: Icon, onChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        placeholder={placeholder}
        type="text"
        onFocus={handleInputFocus}
        onChange={onChange}
      />
    </Container>
  );
};

export default Input;
