import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const ModalBox = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  padding: 2em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: white;
  border-radius: 4px;
  text-align: center;
  position: relative;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${colors.darkBlue};
`;

export { Overlay, ModalBox, ModalContent, CloseButton };
