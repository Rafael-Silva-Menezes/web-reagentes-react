import styled from 'styled-components';

const primaryColor = '#081a51';

export const Container = styled.div`
  height: 100%;
  padding: 0.1rem;
  margin-top: 3rem;
  font-weight: 100;
`;

export const Table = styled.table`
  width: 90%;
  border-collapse: separate;
  border-spacing: 0 1em;
  margin: auto;

  td {
    padding: 2px 10px 2px 10px;
    background-color: #e2e2e2;
    color: #000;
  }
`;

export const TextId = styled.td`
  font-size: 0.7rem;
  text-align: left;
  max-width: 50px;
  width: auto;
  min-width: 100px;
`;

export const TextName = styled.td`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left;
`;

export const TextNumber = styled.td`
  font-size: 0.8rem;
  text-align: end;
`;

export const Buttons = styled.td`
  max-width: 60px;
  width: auto;
  min-width: 10px;
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3rem auto auto auto;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 30%;
`;
