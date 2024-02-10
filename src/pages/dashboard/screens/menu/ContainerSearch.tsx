import { IoIosSearch } from "react-icons/io";
import Input from "../../../../components/Input";
import { fakeCategoriesMenu } from "../../../../data/category_product";
import styled from "styled-components";

interface ContainerSearchProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  category: string;
}

export default function ContainerSearch({
  onSearch,
  onCategoryChange,
  category,
}: ContainerSearchProps) {
  return (
    <ContainerSearchStyled className="input_search_container">
      <div className="form_container">
        <IoIosSearch />
        <Input placeholder="Recherche" onChange={onSearch} />
      </div>

      <div className="select_category_container">
        <select value={category} onChange={onCategoryChange}>
          <option value="">Tous</option>
          {fakeCategoriesMenu.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
    </ContainerSearchStyled>
  );
}

const ContainerSearchStyled = styled.div`
  background-color: #fff;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 2px;
    border-radius: 20px;
    display: flex;
    padding: 16px;
    width: 100%;
    gap: 20px;
    align-items: center;

    .form_container {
      font-size: 1rem;
      font-weight: 400;
      cursor: text;
      display: flex;
      align-items: center;
      width: 100%;
      border-radius: 8px;
      padding-left: 14px;
      border: 1px solid rgb(209, 213, 219);
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      height: 50px;

      &:hover {
        background-color: rgba(17, 25, 39, 0.04);
      }

      svg {
        margin-right: 10px;
        font-size: 1.6em;
        background-color: transparent;
      }

      input {
        color: currentcolor;
        border: 0px;
        box-sizing: content-box;
        background: none;
        height: 1.4375em;
        margin: 0px;
        -webkit-tap-highlight-color: transparent;
        display: block;
        min-width: 0px;
        width: 100%;
        animation-name: mui-auto-fill-cancel;
        animation-duration: 10ms;
        padding: 16.5px 14px 16.5px 0px;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      }

      &:focus-within {
        border: 2.6px solid rgb(99, 102, 241);
        background-color: #fff;
      }
    }
`;