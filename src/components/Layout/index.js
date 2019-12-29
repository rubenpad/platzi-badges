import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

Layout.propTypes = { children: PropTypes.element };

export default Layout;
