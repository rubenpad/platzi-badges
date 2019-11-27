import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

const Item = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  color: black;

  p {
    margin: 0;
  }

  .twitter {
    margin-top: 5px;
    color: ${colors.lightBlue};
  }
`;

export { Item, UserBox };
