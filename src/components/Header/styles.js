import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding-inline-start: 20px;
  background: ${colors.darkBlue};

  p {
    color: white;
    margin-left: 6px;
    span {
      font-weight: bold;
    }
  }
`;