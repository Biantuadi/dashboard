import React from "react";
import styled from "styled-components";
import theme from "../themes/main.themes";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ onChange, ...rest }) => {
  return <InputStyled onChange={onChange} {...rest} />;
};

const InputStyled = styled.input`
  padding: 9px;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 5px;
  outline: none;
  color: #000;
  font-size: 17px;

  &:focus-within {
    border: 2.6px solid rgb(99, 102, 241);
    background-color: #fff;
  }

  @media (max-width: ${theme.breakpoints.largestDesktop}) {
    width: 340px;
    height: 52px;
    padding: 8px;
    font-size: 16px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 300px;
    height: 52px;
    padding: 8px;
    font-size: 16px;
  }
`;

export default Input;
