import React from 'react';

import logo from '../../assets/logo.svg';
import { StyledHeader } from './styles';

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="PlatziConf Logo"/>
      <p>Platzi<span>Conf</span></p>
    </StyledHeader>
  );
};
