import styled from 'styled-components';

import stars from '../../assets/stars.svg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: url(${stars}) repeat, #1b1b25;
  overflow: hidden;
  color: #fff;
  text-align: center;

  h1 {
    font-size: 42px;
  }

  img {
    width: 200px;
    margin: 50px 0;
  }
`;

export default Container;
