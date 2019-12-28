import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Layout.propTypes = { children: PropTypes.element };

export default Layout;
