import React from 'react';
import Container from './styles';

function PageError({ error }) {
  return (
    <Container>
      <h1>
        <span role="img" aria-label="X error">
          ❌
        </span>
        {error.message}
      </h1>
    </Container>
  );
}

export default PageError;
