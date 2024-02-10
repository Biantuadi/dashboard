import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { SlPencil } from "react-icons/sl";
import { CiStar } from "react-icons/ci";

interface ProductEditorProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
  category: any;
  creatorAvatar: string;
}


// @ts-ignore
const ProductEditor = ({ product, isOpen, onClose, category, creatorAvatar }: ProductEditorProps) => {
  // @ts-ignore
  return (
    <AsideContainer open={isOpen}>
      <header className="header">
        <CiStar />
        <IoCloseOutline onClick={onClose} />
      </header>
      <hr />
      <div className="content">
        <div className="container_img">
          <img
            src="https://static.vecteezy.com/system/resources/previews/026/691/352/original/fried-egg-fast-food-meal-icon-isolated-3d-rendering-png.png"
            alt={product.name}
          />
        </div>
        <div className="to_update">
          <h2 className="css-u5c54l">{product.name}</h2>
          <SlPencil />
        </div>
        <p>{product.description}</p>
        <div className="product_info">
          <LabelAndTitle label="Créer par" child={
            <img src={creatorAvatar} alt="avatar" />
          } />
          <LabelAndTitle label="Catégorie" child={
          <h3>{category.name}</h3> 
          } />
          <LabelAndTitle label="Unité" child={
           <h3>{product.unity}</h3> 
          } />
          <LabelAndTitle label="Prix" child={
         <h3>{product.price} €</h3> 
          } />
          <LabelAndTitle label="Pourcentage taxe" child={
         <h3>{product.tax} %</h3> 
          } />
          <LabelAndTitle label="coût" child={
         <h3>{product.cost} €</h3> 
          } />

        </div>
      </div>
    </AsideContainer>
  );
};

const AsideContainer = styled.div`
  position: fixed;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 30px;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-450px")};
  bottom: 0;
  width: 450px;
  height: 100%;
  z-index: 3000;
  transition: right 0.3s ease-in-out;
  animation: ${({ open }) => (open ? "slideInRight 0.3s forwards" : "none")};

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .header {
    display: flex;
    padding: 40px 20px;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid rgb(242, 244, 247);
    gap: 20px;

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    svg {
      font-size: 1.5rem;
      color: rgb(108, 115, 127);
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      cursor: pointer;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      padding: 5px;

      &:hover {
        background-color: rgba(108, 115, 127, 0.04);
      }
    }
  }

  hr {
    border: none;
  }

  .content {
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;

    @media (min-width: 1200px)
    {
      .css-u5c54l {
        font-size: 1.0417rem;
    }
  }


@media (min-width: 900px) {
    .css-u5c54l {
        font-size: 1.0417rem;
    }

}

@media (min-width: 600px) 
{
    .css-u5c54l {
        font-size: 1.0417rem;
    }
}
.css-u5c54l {
    margin: 0px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 700;
    font-size: 1.0625rem;
    line-height: 1.2;
}
    

    .container_img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px dashed rgb(210, 214, 219);
      background-color: rgb(248, 249, 250);

      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
      }
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
    }

    .product_info {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }

  .to_update {
    display: flex;
    justify-content: space-between;
  }
`;

const LabelAndTitle = ({ label, child }: any) => {
  return (
    <LabelAndTitleStyled>
      <span>{label}</span>
      <div className="flex">
      {child}
      </div>
    </LabelAndTitleStyled>
  );
};

const LabelAndTitleStyled = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.66;
    color: rgb(108, 115, 127);
    flex: 1;

  }

  .flex{

    flex: 1.8;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.57;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;


export default ProductEditor;
