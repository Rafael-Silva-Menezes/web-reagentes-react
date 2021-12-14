import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DashboardContainer = styled.div`
  --column-count: 2;
  // Flexbox Fallback
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--spacing) * -0.5);
  // Grid
  display: grid;
  grid-template-columns: repeat(var(--column-count), 1fr);
  grid-gap: var(--spacing);

  // Switch to 4-col grid on larger screens
  @media screen and (min-width: 48rem) {
    --column-count: 4;
  }

  // If we have grid support, reset the margins and paddings;
  // grid-gap handles the spacing for us.
  @supports (display: grid) {
    margin: 0;

    &__item {
      padding: 0;
    }
  }
`;

export const DashboardItem = styled.div`
  // By default, items span 2 columns
  flex: 1 1 50%;
  grid-column-end: span 2;
  padding: calc(var(--spacing) / 2);
`;

export const DashboardItemCol = styled.div`
  flex-basis: calc(100% / var(--column-count));
  grid-column-end: span 1;
`;

export const DashboardItemFull = styled.div`
  flex-basis: 100%;
  grid-column: 1 / -1;
`;

export const Card = styled.div`
  height: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  align-items: center;
  text-align: center;
  background-color: #fff;
  color: #4f4f4f;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media screen and (max-width: 48rem) {
    img {
      width: 100%;
    }
  }

  strong {
    margin: auto 0.5rem auto 0.5rem;
  }
`;

export const Linker = styled(Link)`
  text-decoration: none;
`;

export const Table = styled.table`
  width: 90%;
  border-collapse: separate;
  border-spacing: 0 0.4em;
  margin: auto;

  td {
    padding: 2px 10px 2px 10px;
    background-color: #081a51;
    color: #ffff;
  }
`;

export const TextId = styled.td`
  font-size: 0.7rem;
  text-align: left;
  max-width: 50px;
  width: auto;
  min-width: 70px;
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
