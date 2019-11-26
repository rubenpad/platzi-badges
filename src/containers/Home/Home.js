import React from 'react';
import { Link } from 'react-router-dom';

import astronauts from '../../assets/astronauts.svg';
import logo from '../../assets/platziconf-logo.svg';
import { StyledHome } from './styles';

function Home() {
  return (
    <StyledHome>
      <img className="astronauts" src={astronauts} alt="Astronauts"/>
      <div className="description">
        <img src={logo} alt="PlatziConf Logo" />
        <h1>Badge Management System</h1>
        <Link to="/badges/new">Create a new badge</Link>
        <Link to="/badges">Badges List</Link>
      </div>
    </StyledHome>
  );
};

export default Home;
