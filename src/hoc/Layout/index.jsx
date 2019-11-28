import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../../components/common/Header';

const Main = styled.main`
  padding-top: 80px;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Main className="container">
      {children}
    </Main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
