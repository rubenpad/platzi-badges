import React from 'react';

import Container from './styles';
import logo from '../../assets/logo.svg';

const NotFound = () => (
  <Container>
    <img src={logo} alt="Astronauts" />
    <h1>
      404
      <br />
      PAGE NOT FOUND
    </h1>
  </Container>
);

export default NotFound;
