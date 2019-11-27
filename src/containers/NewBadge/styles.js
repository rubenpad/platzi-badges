import styled from 'styled-components';
import { above } from '../../GlobalStyle';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #f6f8f9;
`;

const ContainerBadge = styled.div`
  width: 100%;
  height: 340px;
  margin: 20px 0 0 0;
  ${above.mediumL`
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `};
`;

const ContainerForm = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-self: flex-start;
  font-size: 17px;

  ${above.mediumL`
    width: 50%;
    margin: 20px 0;
  `};
`;

export { Container, ContainerBadge, ContainerForm };
