import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

const Item = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  background: #f6f8f9;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;

  .twitter {
    color: ${colors.lightBlue};
  }
`;

export { Item, UserBox };
