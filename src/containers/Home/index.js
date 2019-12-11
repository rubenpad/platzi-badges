import React from 'react';
import { Link } from 'react-router-dom';

import astronauts from '../../assets/astronauts.svg';
import logo from '../../assets/platziconf-logo.svg';
import { Container, Image, LandPage } from './styles';

function Home() {
  return (
    <Container>
      <Image src={astronauts} alt="Astronauts" />
      <LandPage>
        <img src={logo} alt="PlatziConf Logo" />
        <h1>Badge Management System</h1>
        <Link to="/badges/new">Create a new badge</Link>
        <Link to="/badges">Badges List</Link>
      </LandPage>
    </Container>
  );
}

export default Home;
