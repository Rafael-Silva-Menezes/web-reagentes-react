import React from 'react';
import { Container } from './styles';

interface SelectProps {
  name: string;
  onChange: any;
  value: any;
  data: any[];
}

const InputSelect: React.FC<SelectProps> = ({
  data,
  name,
  value,
  onChange,
}) => {
  return (
    <>
      <Container name={name} value={value} onChange={onChange}>
        {data.map(item => (
          <option value={item.value} key={item.key}>
            {item.label}
          </option>
        ))}
      </Container>
    </>
  );
};

export default InputSelect;
