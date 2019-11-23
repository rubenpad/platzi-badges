import styled from 'styled-components';
import { above, colors } from '../../GlobalStyle';
import stars from '../../assets/stars.svg';

export const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${stars}) repeat, #1b1b25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .astronauts {
    width: 200px;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
      width: 200px;
      margin-top: 5px;
    }

    h1 {
      margin-top: 20px;
      color: white;
      font-size: 24px;
    }

    button {
      width: 100%;
      height: 48px;
      margin: 20px 0;
      border-radius: 4px;
      background: ${colors.green};
      color: white;
      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      
      &:active {
        transition: all 0.5s ease-out;
        transform: scale(.9);
      }
    }
  }

  ${above.large`
    flex-direction: row;

    .astronauts {
      width: 400px;
    }

    .description {
      margin-left: 20px;
      
      button {
        width: 140px;
        font-size: 18px;
      }
    }
  `}
`;
