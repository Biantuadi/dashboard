import styled from "styled-components";
import Button from "./Button";
import { NavLink } from "react-router-dom";

interface TitlePageProps {
  text: string;
  button_text: string;
  onClick: () => void;
  navLink?: string;
}

export default function TitlePage({
  text,
  button_text,
  onClick,
  navLink,
}: TitlePageProps) {
  return (
    <TitlePageStyled className="first_container_text-and-button">
      <h1 className="">{text}</h1>
      {navLink ? (
        <NavLink to={navLink}>
          <Button className="classic" text={button_text} onClick={onClick} />
        </NavLink>
      ) : (
        <Button className="classic" text={button_text} onClick={onClick} />
      )}
    </TitlePageStyled>
  );
}

const TitlePageStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    line-height: 1.2;
    color: rgb(17, 25, 39);
  }

  button {
  }
`;
