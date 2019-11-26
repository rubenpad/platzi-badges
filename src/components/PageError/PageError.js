import React from 'react';
import { StyledPageError } from './styles';

function PageError(props) {
  const { error } = props;
  return (
    <StyledPageError>
      <h1>
        <span role="img" aria-label="X error">
          ❌
        </span>
        {error.message}
      </h1>
    </StyledPageError>
  );
}

export default PageError;
