import styled from 'styled-components';
import Button from './Button'

interface TitlePageProps {
    text: string;
    button_text: string;
    onClick: () => void;
}

export default function TitlePage({text, button_text, onClick}: TitlePageProps) {
  return (
    <TitlePageStyled className="first_container_text-and-button">
    <h1 className="">
        {text}

    </h1>
    <Button className="classic" text={button_text} onClick={onClick} />
  </TitlePageStyled>
  )
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
`
