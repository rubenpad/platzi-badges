/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';
import { colors } from '../../GlobalStyle';

const rotation = keyframes`
  0% { 
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  25% {
    transform: rotate(-90deg);
  }
  75% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 2px solid ${colors.darkBlue};
  border-radius: 50%;
  animation: ${rotation} 2s ease-in-out infinite;

  &:after {
    width: 10px;
    height: 10px;
    position: absolute;
    background: ${colors.green};
    border-radius: 100%;
    content: '';
  }
`;
