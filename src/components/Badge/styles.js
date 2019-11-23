import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const StyledBadge = styled.div`
  width: 400px;
  height: 340px;
  border-radius: 4px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.08);

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

  .avatar {
  width: 120px;
  height: 120px;
  margin-right: 30px;
  border-radius: 50%;
  object-fit: cover;
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
`;

