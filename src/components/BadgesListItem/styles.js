import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

const StyledBadgesListItem = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  background: #f6f8f9;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .twitter {
    color: ${colors.lightBlue};
  }
`;

export { StyledBadgesListItem, Information };
