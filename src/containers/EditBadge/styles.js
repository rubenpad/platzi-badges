/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { above } from '../../GlobalStyle';

export const StyledEditBadge = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #f6f8f9;

  .badge {
    width: 100%;
    height: 340px;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-self: flex-start;
  }

  .form {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-self: flex-start; 
    font-size: 17px;
  }

  ${above.mediumL`
    .badge {
      width: 50%;
    }

    .form {
      width: 50%;
      margin: 20px 0;
    }
  `};
`;
