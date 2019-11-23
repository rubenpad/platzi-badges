import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const StyledBadgeForm = styled.div`
  width: 400px;
  height: 480px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  h2 {
    margin: 20px 0;
  }

  .form {
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
      height: 48px;
      margin-bottom: 15px;
      padding-left: 10px;
      border: 1px solid #ebebeb;
      border-radius: 4px;
    }

    button {
      width: 100%;
      height: 48px;
      border-radius: 4px;
      background: ${colors.green};
      color: white;
      cursor: pointer;
    }
  }
`;
