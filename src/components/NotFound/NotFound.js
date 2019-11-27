import React from 'react';

import { StyledNotFound } from './styles';
import logo from '../../assets/logo.svg';

function NotFound() {
  return (
    <StyledNotFound>
      <img src={logo} alt="Astronauts" />
      <h1>
        404
        <br />
        PAGE NOT FOUND
      </h1>
    </StyledNotFound>
  );
}

export default NotFound;
