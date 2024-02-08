import styled from "styled-components";
import Header from "../header/Header";

export default function Hoverview() {
  return (
    <HoverviewStyled>
      <Header />
    </HoverviewStyled>
  );
}

const HoverviewStyled = styled.div`
    padding:10px 20px;
    background-color: #fff;
    height: 100%;

`;
