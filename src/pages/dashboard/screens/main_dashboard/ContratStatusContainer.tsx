import styled from "styled-components";
import {FaArrowRight} from "react-icons/fa";

interface ContratStatusContainerProps {
  label: string;
  image: string;
  number_of_contrat: number;
  openManageContrats: () => void;
  
}

export function ContratStatusContainer({
  label,
  image,
  number_of_contrat,
  openManageContrats,
}: ContratStatusContainerProps) {
  return (
    <ContratStatusContainerStyled>
      <div className="container_contrat_img_text">
        <div className="container_img">
          <img src={image} alt={label} />
        </div>
        <div className="texts_infos">
          <span className="span-text my-label">{label}</span>
          <h1 className="css-agywf3">{number_of_contrat}</h1>
        </div>
      </div>
      <hr className="divider" />
      <button className="container_see_more"  onClick={openManageContrats}>
       <span className="btn_see">
        Tout voir
       </span>
       <FaArrowRight />
      </button>
    </ContratStatusContainerStyled>
  );
}

const ContratStatusContainerStyled = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 5px 22px,
    rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px;
  flex: 1;

  .container_contrat_img_text {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: 20px;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      background-color: rgba(17, 25, 39, 0.04);
    }
  }

  h1{
    font-size: 2rem;
  }

  .container_img {
    padding: 10px;
    border-radius: 10px;

    img {
      width: 60px;
      height: 60px;
    }
  }

.my-label {
  font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.57;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    color: rgb(108, 115, 127);
}

  .divider {
    border: none;
    height: 1px;
    background-color: #cccccc40; /* Couleur du trait */
    margin: 2px 0; /* Marge au-dessus et en dessous du trait */
    width: 100%; /* Pour que le trait prenne toute la largeur */
  }

  .container_see_more {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    padding: 5px 10px;
    gap: 10px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 5px;

    &:hover {
      background-color: rgba(17, 25, 39, 0.04);
    }

    .btn_see{
      font-weight:500;
      font-size: 14px;
    
    }

    svg {
      font-size: 12px;
    }
  }
`;
