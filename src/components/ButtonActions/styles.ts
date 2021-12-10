import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: ${props => (props.color ? '#fff' : '#081a51')};
  height: 45px;
  width: 50px;
  border-radius: 5px;
  border: ${props => (props.color ? '1px solid #081a51' : 0)};
  padding: 0 5px;
  margin: 0.1rem;
  color: ${props => (props.color ? '#081a51' : '#fff')};
  font-weight: 500;
  transition: background-color 0.2s;
  &:hover {
    background: #1b2b65;
  }
`;
