import styled from 'styled-components';

const primaryColor = '#081a51';
const secondaryColor = '#1B2B65';

export const TableContent = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  font-size: 1.2rem;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
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
