import styled from 'styled-components';

const primaryColor = '#081a51';
const secondaryColor = '#1B2B65';

export const Admin = styled.div`
  --spacing: 1rem;
  // Flexbox Fallback
  display: flex;
  flex-wrap: wrap;
  // Grid
  display: grid;
  height: 100vh;
  grid-template-rows: 70px 1fr 70px;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    'nav header'
    'nav main'
    'footer footer';

  @media screen and (min-width: 48rem) {
    --spacing: 2rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-basis: 100%;
  grid-area: header;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  position: relative;
`;

export const SideMenu = styled.nav`
  flex: 0 0 250px;
  grid-area: nav;
  background-color: ${primaryColor};
  width: 250px;
`;

export const SideMenuOptions = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Logo = styled.img`
  position: relative;
  display: block;
  margin: 5vh auto 8vh auto;
  max-width: 70%;
  max-height: 70%;
`;

export const Main = styled.main`
  flex: 1;
  grid-area: main;
  padding: var(--spacing);
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  background-color: #f4f7fa;
`;

export const Footer = styled.footer`
  display: flex;
  grid-area: footer;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 var(--spacing);
  color: #3a5094;
  background-color: #040e2f;
`;

export const Toolbar = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--spacing);
`;

export const Item = styled.li`
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
`;

export const Alink = styled.a`
  display: block;
  padding: 1rem 2rem;
  color: #fff;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #fff;
    background-color: ${secondaryColor};
  }
`;

export const Card = styled.div`
  height: 100%;
  padding: 1rem;
  font-size: 2rem;
  font-weight: 300;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const Ticker = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const TickerItem = styled.li`
  margin-right: 1rem;
`;

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

export const Title = styled.h1`
  display: flex;
  flex: 0 0 250px;
  height: 70px;
  font-weight: bold;
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0;
  color: #000000;
  font-size: 1.4rem;

  @media (min-width: 720px) {
    font-size: 1.8rem;
  }
`;
