import styled from 'styled-components';

/* export const DashboardContainer = styled.div`
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
  font-size: 2rem;
  font-weight: 300;
  background-color: #fff;
  color: #cecece;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media screen and (max-width: 48rem) {
    img {
      width: 100%;
    }
  }
`; */

export const DashboardItem = styled.div`
  display: flex;
  margin-top:1rem;

`;

export const DashboardItemFull = styled.div`
  width: 55%;
  height: 55%;
  border-radius: 10px;
  margin: 1rem;
  margin-top:20px;
`;
export const DashboardItemFull1 = styled.div`
  width: 45%;
  height: 55%;
  border-radius: 10px;
  margin: 1rem;
  padding-left:200px;
  margin-top:10px;
`;

export const Card = styled.div`
  display: grid;
  height: 8rem;
  width: 15rem;
  border-radius: 20px;
  margin: 1rem;
  background-color:rgb(208, 242, 255);
  color: white;
  text-decoration: none;
  text-align: center;

  strong{
    margin-top:0;
    color:#081a51;

  }
`;

export const IconSpan = styled.span`
  background-image: linear-gradient(
  135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%);
  color: rgb(0,0,0);
  height: 50px;
  width: 50px;
  margin: 1rem;
  border-radius: 50%;
  padding: .9rem ;
`;


