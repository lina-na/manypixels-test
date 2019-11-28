import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AppHeader = styled.header`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  background: #fff;
  height: 80px;
  padding: 1.2rem;
  box-shadow: 0 1px 15px rgba(0, 0, 0, .04), 0 1px 6px rgba(0, 0, 0, .04);
`;

const Header = () => (
  <AppHeader>
    <h1>
      <Link to="/artists">Popular Artists</Link>
    </h1>
  </AppHeader>
);

export default Header;
