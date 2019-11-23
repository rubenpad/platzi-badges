import React from 'react';

import astronauts from '../../assets/astronauts.svg';
import logo from '../../assets/platziconf-logo.svg';
import { StyledHome } from './styles';

export const Home = () => {
  return (
    <StyledHome>
      <img className="astronauts" src={astronauts} alt="Astronauts"/>
      <div className="description">
        <img src={logo} alt="PlatziConf Logo"/>
        <h1>Badge Management System</h1>
        <button>START</button>
      </div>
    </StyledHome>
  )
};
