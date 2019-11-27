import styled from 'styled-components';
import { above, colors } from '../../GlobalStyle';

const Container = styled.div`
  width: 100%;
  height: 480px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 4px;
  border: 1px solid #ebebeb;

  ${above.mediumL`
    width: 420px;
  `}
`;

const Title = styled.h2`
  margin: 20px 0;
`;

const Form = styled.form`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  margin-bottom: 15px;
  padding-left: 10px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background: ${colors.green};
  color: white;
  cursor: pointer;
`;

export { Container, Title, Form, Input, Button };
