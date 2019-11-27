import styled from 'styled-components';
import { above, colors } from '../../GlobalStyle';
import stars from '../../assets/stars.svg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${stars}) repeat, #1b1b25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${above.large`
    flex-direction: row;
  `}
`;

const Image = styled.img`
  width: 200px;
  ${above.large`
    width: 400px;
  `};
`;

const LandPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    margin-top: 5px;
  }

  h1 {
    margin-top: 20px;
    color: white;
    font-size: 24px;
  }

  a {
    width: 100%;
    height: 48px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: ${colors.green};
    color: white;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;

    &:active {
      transition: all 0.5s ease-out;
      transform: scale(0.9);
    }
  }

  ${above.large`
    margin-left: 40px;
  `};
`;

export { Container, Image, LandPage };
