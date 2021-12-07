import styled from 'styled-components';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

const primaryColor = '#081a51';

export const Container = styled.div`
  height: 100%;
  padding: 0.1rem;
  margin-top: 3rem;
  font-weight: 100;
`;

export const Accept = styled(FiThumbsUp)`
  color: ${primaryColor};
  cursor: pointer;
  margin: auto 0.4rem auto 0.4rem;
`;

export const Decline = styled(FiThumbsDown)`
  color: #008080;
  cursor: pointer;
  margin: auto 0.4rem auto 0.4rem;
`;
