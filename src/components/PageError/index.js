import React from 'react';
import PropTypes from 'prop-types';
import Container from './styles';

const PageError = ({ error }) => (
  <Container>
    <h1>
      <span role="img" aria-label="X error">
        ❌
      </span>
      {error.message}
    </h1>
  </Container>
);

PageError.propTypes = { error: PropTypes.object };

export default PageError;
