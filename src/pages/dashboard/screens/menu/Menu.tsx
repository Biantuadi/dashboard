import TitlePage from "../../../../components/TitlePage";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import Input from "../../../../components/Input";
import { fakeProductsMenu, fakeCategoriesMenu } from "./main_fake.data";
import ProductCard from "../../../../components/Card";
import ProductEditor from "../../../../components/product_aside/ProductEditor";

// Menu component
export default function Menu() {
  const [products, setProducts] = useState(fakeProductsMenu);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [asideOpen, setAsideOpen] = useState(false);
  const [isCreatingProduct, setIsCreatingProduct] = useState(false);

  const onSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    const filteredProducts = fakeProductsMenu.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );
    setProducts(filteredProducts);
  };

  const onCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    const filteredProducts = selectedCategory
      ? fakeProductsMenu.filter(
          (product) => product.category_id === parseInt(selectedCategory)
        )
      : fakeProductsMenu;
    setProducts(filteredProducts);
  };

  const onProductClick = (product) => {
    setSelectedProduct(product);
    setAsideOpen(true);
  };

  const closeAside = () => {
    setAsideOpen(false);
    setTimeout(() => {
      setSelectedProduct(null);
    }, 300); // Adjust this timeout to match your transition duration
  };

  const createProduct = () => {
    // Implement logic to create a new product
  };

  return (
    <MenuStyled>
      <TitlePage
        text="Menu"
        button_text="+ Ajouter un menu"
        onClick={() => setIsCreatingProduct(true)}
      />

      {isCreatingProduct && (
        <ProductEditor
          product={{ name: "", description: "", unity: "", price: "" }}
          isOpen={asideOpen}
          onClose={closeAside}
        />
      )}

      {selectedProduct && (
        <ProductEditor
          product={selectedProduct}
          isOpen={asideOpen}
          onClose={closeAside}
        />
      )}

      <div className="main_container">
        <div className="flex1">
          <div className="input_search_container">
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
          </div>

          <div className="container_cards">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                category={fakeCategoriesMenu.find(
                  (cat) => cat.id === product.category_id
                )}
                onClick={() => onProductClick(product)}
              />
            ))}
          </div>
        </div>
        <div className="aside">Contenu de la barre latérale</div>
      </div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background-color: #fdfdfd;
  height: 100%;
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding: 0 30px 50px 30px;

  .main_container {
    display: flex;
    gap: 30px;
  }

  .flex1 {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .input_search_container {
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
  }

  .aside {
    flex: 1;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 5px 22px,
      rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px;
    padding: 20px;
    align-self: flex-start;
  }

  .select_category_container select {
    height: 50px;
    width: 80px;
    padding: 8px;
    border: 1px solid rgb(209, 213, 219);
    border-radius: 4px;
    cursor: pointer;

    &:focus-within {
      border: 2.6px solid rgb(99, 102, 241);
      background-color: #fff;
    }

    option {
      cursor: pointer;
    }
  }

  .container_cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;
