import styled from 'styled-components';
import { above, colors } from '../../GlobalStyle';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  background: #f6f8f9;
  align-items: flex-start;
`;

const ContainerBadge = styled.div`
  width: 100%;
  height: 50%;
  margin: 20px 0 0 0;
  ${above.mediumL`
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `};
`;

const ContainerActions = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 17px;

  h2 {
    margin: 10px 0;
  }

  a {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    border-radius: 4px;
    background: ${colors.green};
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500px;
  }

  ${above.mediumL`
    width: 320px;
    margin: 20px 0;
  `};
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background: ${colors.danger};
  color: white;
  cursor: pointer;
  font-weight: 500px;
  font-size: 16px;
  &:active {
    transition: .1s ease-out;
    transform: scale(.9);
  }
`;

export { Container, ContainerBadge, ContainerActions, Button };
