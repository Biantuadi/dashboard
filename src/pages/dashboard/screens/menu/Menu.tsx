import TitlePage from "../../../../components/TitlePage";
import styled from "styled-components";
import { useState } from "react";
import ProductCard from "../../../../components/Card";
import ProductEditor from "./ProductEditor";
import Tresor from "../../../../assets/avantar/avatar-marcus.png";
import { fakeProductsMenu } from "../../../../data/data_products";
import { fakeCategoriesMenu } from "../../../../data/category_product";
import ContainerSearch from "./ContainerSearch";

export default function Menu(): JSX.Element {
  const [products, setProducts] = useState<any[]>(fakeProductsMenu);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [asideOpen, setAsideOpen] = useState<boolean>(false);

  console.log(search);
  

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    const filteredProducts = fakeProductsMenu.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );
    setProducts(filteredProducts);
  };

  const onCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    const filteredProducts = selectedCategory
      ? fakeProductsMenu.filter(
          (product) => product.category_id === parseInt(selectedCategory)
        )
      : fakeProductsMenu;
    setProducts(filteredProducts);
  };

  const onProductClick = (product: any): void => {
    setSelectedProduct(product);
    setAsideOpen(true);
  };

  const closeAside = (): void => {
    setAsideOpen(false);
    setTimeout(() => {
      setSelectedProduct(null);
    }, 300);
  };

  return (
    <MenuStyled>
      <TitlePage
        text="Menu"
        button_text="+ Ajouter"
        onClick={() => {}}
      />

      {selectedProduct && (
        <ProductEditor
          product={selectedProduct}
          isOpen={asideOpen}
          onClose={closeAside}
          category={fakeCategoriesMenu.find(
            (cat) => cat.id === selectedProduct.category_id
          )}
          creatorAvatar={Tresor}
        />
      )}

      <div className="main_container">
        <div className="flex1">
          <ContainerSearch onSearch={onSearch} onCategoryChange={onCategoryChange} category={category} />

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
