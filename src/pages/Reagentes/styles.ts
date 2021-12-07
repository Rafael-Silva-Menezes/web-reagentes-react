import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ReagentesContainer = styled.div`
  height: 100%;
  padding: 0.1rem;
  font-weight: 100;
  display: flex;
  flex-direction: row;
`;

export const ReagentesCardButton = styled(Link)`
  display: inline-block;
  height: 5rem;
  width: 15rem;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  background-color: #081a51;
  color: white;
  text-decoration: none;
  text-align: center;
`;

export const ReagentesSpan = styled.span`
  height: 100%;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
