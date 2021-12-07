import styled from 'styled-components';

const primaryColor = '#081a51';
const secondaryColor = '#1B2B65';

export const TableContent = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  font-size: 1rem;

  td,
  th {
    border: none;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #e7f2f7;
  }

  tr:hover {
    background-color: #ddd;
  }

  tr {
    color: #000000;
    text-align: center;
  }

  th {
    text-align: center;
    color: #cecece;
    border: none;
  }
`;
