import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { SlPencil } from "react-icons/sl";
import editableField from "./Editable";
import { CiStar } from "react-icons/ci";



// ProductEditor component
// @ts-ignore
const ProductEditor = ({ product, isOpen, onClose }) => {
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
            <h2>

              {editableField(product.name, (value:any) => {
                // Update product name here
              })}
            </h2>
            <SlPencil />
          </div>
          <p>
            {editableField(product.description, (value:any) => {
              // Update product description here
            })}
          </p>
          <div className="product_info">
            <p>{editableField(product.unity, (value:any) => {
              // Update product unity here
            })}</p>
            <p>{editableField(product.price, (value:any) => {
              // Update product price here
            })} €</p>
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
  // @ts-ignore
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
      justify-content: space-between;
    }
  }

  .to_update {
    display: flex;
    justify-content: space-between;
  }
`;

export default ProductEditor;