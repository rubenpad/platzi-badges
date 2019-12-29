import styled, { css } from 'styled-components';
import { colors } from '../../GlobalStyle';

const ModalDelete = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
  }
`;

const Button = styled.button`
  width: 11rem;
  margin: 0 5px;
  padding: 0.5rem 0;
  display: inline-block;
  border-radius: 3px;
  background: ${colors.green};
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  ${(props) => props.danger && css`
      background: ${colors.danger};
  `}

`;

export { ModalDelete, Button };
