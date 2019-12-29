import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import StyledHeader from './styles';

const Header = () => (
  <StyledHeader>
    <img src={logo} alt="PlatziConf Logo" />
    <Link to="/">
      <p>
        Platzi
        <span>Conf</span>
      </p>
    </Link>
  </StyledHeader>
);

export default Header;
