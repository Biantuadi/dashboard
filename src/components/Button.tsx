import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, icon, className, ...rest }) => {
  return (
      <ButtonStyled onClick={onClick} className={className} {...rest}>
        {text}
      {icon}
      </ButtonStyled>
  );
};


const ButtonStyled = styled.button`
  background-color: #585DF9;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 13px 47px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;


  &:hover {
    background-color: #4B4FE9;
  }
`;



export default Button;