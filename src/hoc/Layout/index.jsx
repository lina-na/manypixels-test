import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/common/Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="main container">
      {children}
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
