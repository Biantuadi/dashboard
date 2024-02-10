import styled from "styled-components";
import { CiStar } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";

interface Props {
    product: any;
    category: any;
    onClick?: () => void;
    
}
const ProductCard = ({ product, category, onClick }: Props) => (

  
  <Card onClick={onClick}>
    <header>
      <CiStar />
      <IoMdMore />
    </header>
    <img src={product.iconProduct ? product.iconProduct : category.icon } alt={product.name} />
    <CardInfo>
      <ProductName>{product.name}</ProductName>
      <hr />
      <div className="product_info">
        <ProductDescription>{product.unity + "•"}</ProductDescription>
        <ProductPrice>{product.price} €</ProductPrice>
      </div>
    </CardInfo>
  </Card>
);

const Card = styled.div`
  background: transparent;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgb(242, 244, 247);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 30px;
    background-color: #fff;
  }

  header {
    display: flex;
    justify-content: space-between;

    svg {
      /* font-size: 1.5rem; */
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

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 10px;
  }

  .product_info {
    display: flex;
    justify-content: space-between;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  
`;

const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.57;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  cursor: pointer;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductDescription = styled.p`
  margin: 0px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.57;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  color: rgb(108, 115, 127);
`;

const ProductPrice = styled.p`
  color: rgb(99, 102, 241);
  font-weight: bold;
  font-size: 1.2rem;
`;

export default ProductCard;
