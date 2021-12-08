import styled from 'styled-components';
import { shade } from 'polished';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 4rem auto auto auto;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  a {
    color: #081a51;
    align-self: flex-start;
    margin-left: 40px;
  }

  a:hover {
    color: ${shade(0.2, '#081a51')};
  }
`;
