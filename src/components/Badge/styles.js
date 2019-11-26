import styled from 'styled-components';
import { above, colors } from '../../GlobalStyle';

export const StyledBadge = styled.div`
  width: 100%;
  height: 340px;
  border-radius: 4px;
  background: white;

  .header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: ${colors.darkBlue};
  }

  .user {
    width: 100%;
    height: 200px;
    padding: 40px;
    display: flex;
    align-items: center;

    p { 
      margin: 0;

      span { color: ${colors.lightBlue }; }
    }
  }

  .footer {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    background: ${colors.darkBlue};
    color: ${colors.lightBlue};
  }

  ${above.mediumL`
    width: 420px;
  `};
`;

