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
  /* width: 380px; */
  padding: 9px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
  outline: none;
  /* height: 55px; */
  color: #000;
  font-size: 17px;

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