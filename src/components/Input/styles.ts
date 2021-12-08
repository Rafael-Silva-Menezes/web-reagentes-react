import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
  border-bottom: 1px solid #081a51;
  padding: 5px;
  margin: auto auto 20px auto;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #0000ff;
      border-color: #0000ff;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #9400d3;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000000;
    &::placeholder {
      color: #c6c6c6;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
