import styled from 'styled-components';
import { Link } from 'react-router-dom';

const primaryColor = '#081a51';
const secondaryColor = '#1B2B65';

const side_width = '210px';
const header_height = '70px';
const footer_height = '0px';

const responsive_size = '48rem';

export const Admin = styled.div`
  --spacing: 1rem;
  // Flexbox Fallback
  display: flex;
  flex-wrap: wrap;
  // Grid
  display: grid;
  height: 100vh;
  grid-template-rows: ${header_height} 1fr ${footer_height};
  grid-template-columns: ${side_width} 1fr;
  grid-template-areas:
    'nav header'
    'nav main';

  @media screen and (min-width: ${responsive_size}) {
    --spacing: 2rem;
  }
  @media screen and (max-width: ${responsive_size}) {
    grid-template-rows: 10% 1fr 0px;
    grid-template-columns: 20% 80%;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-basis: 100%;
  grid-area: header;
  height: ${header_height};
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  position: relative;

  @media screen and (max-width: ${responsive_size}) {
    height: 40px;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-weight: bold;
  font-family: sans-serif;
  color: #000000;
  font-size: 1.4rem;

  @media screen and (max-width: ${responsive_size}) {
    font-size: 1rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    border-left: 1px solid #cecece;
    padding-left: 1rem;
    margin-left: 20px;
  }

  strong {
    font-weight: bold;
  }

  img {
    width: 7vh;
    height: 7vh;
    border-radius: 50%;
    margin: auto auto auto 10px;

    @media screen and (max-width: ${responsive_size}) {
      width: 3vh;
      height: 3vh;
    }
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }
`;

export const Logo = styled.img`
  position: relative;
  display: block;
  margin: 5vh auto 8vh auto;
  max-width: 70%;
  max-height: 70%;
`;

export const Logout = styled.button`
  display: flex;
  margin: auto 10px auto 10px;
  background: none;
  border: none;
  color: ${primaryColor};
  &:hover {
    color: ${secondaryColor};
  }
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

export const Toolbar = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--spacing);
`;

export const Aside = styled.nav`
  flex: 0 0 ${side_width};
  grid-area: nav;
  background-color: ${primaryColor};
  width: ${side_width};

  @media screen and (max-width: ${responsive_size}) {
    width: 100%;
  }
`;

export const MenuContainer = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-left: 10%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    @media (max-width: ${responsive_size}) {
      margin-left: 0px;
    }
  }
`;

export const MenuButtonContent = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1rem;
  color: #fff;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #fff;
    background-color: ${secondaryColor};
    text-decoration: none;
  }

  @media (max-width: ${responsive_size}) {
    margin-left: 0px;
    display: flex;
    justify-content: center;
    & p {
      display: none;
    }
  }
`;

export const Icon = styled.span`
  margin: auto 5px auto 5px;
  @media (max-width: ${responsive_size}) {
    margin: auto 0px auto 0px;
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
  @media screen and (min-width: ${responsive_size}) {
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

// export const Footer = styled.footer`
//   display: flex;
//   grid-area: footer;
//   flex-basis: 100%;
//   justify-content: space-between;
//   align-items: center;
//   height: ${footer_height};
//   padding: 0 var(--spacing);
//   color: #3a5094;
//   background-color: #040e2f;
// `;

// export const Ticker = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   flex-wrap: wrap;
// `;

// export const TickerItem = styled.li`
//   margin-right: 1rem;
// `;
