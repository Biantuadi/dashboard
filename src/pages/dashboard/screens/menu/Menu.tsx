import TitlePage from "../../../../components/TitlePage";
import styled from "styled-components";
import { useState } from "react";
import ProductCard from "../../../../components/Card";
import ProductEditor from "./ProductEditor";
import Tresor from "../../../../assets/avantar/avatar-marcus.png";
import { fakeProductsMenu } from "../../../../data/data_products";
import { fakeCategoriesMenu } from "../../../../data/category_product";
import ContainerSearch from "./ContainerSearch";
import convertirCaracteresSpeciaux from "../../../../utils/main_utils";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import CategoryRings from "./CategoryRings";

export default function Menu(): JSX.Element {
  const [products, setProducts] = useState<any[]>(fakeProductsMenu);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [asideOpen, setAsideOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage: number = 9;

  const onPageNext = (): void => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const onPagePrevious = (): void => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    const filteredProducts = fakeProductsMenu.filter((product) =>
      convertirCaracteresSpeciaux(product.name.toLowerCase()).includes(
        convertirCaracteresSpeciaux(searchValue)
      )
    );
    setProducts(filteredProducts);
    setCurrentPage(1); // Reset page number on search
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
    setCurrentPage(1); // Reset page number on category change
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

  // Calculate the index range of products to display based on the current page
  const indexOfLastProduct: number = currentPage * productsPerPage;
  const indexOfFirstProduct: number = indexOfLastProduct - productsPerPage;
  const currentProducts: any[] = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <MenuStyled>
      <TitlePage text="Menu" button_text="+ Ajouter" onClick={() => {}} />

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
          <ContainerSearch
            onSearch={onSearch}
            onCategoryChange={onCategoryChange}
            category={category}
          />

          <div className="container_cards">
            {currentProducts.map((product) => (
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

          <ContainerChangePage className="change_page_next_cards">
            <div className="text_container">
              <p>
                Page {currentPage} sur{" "}
                {Math.ceil(products.length / productsPerPage)}
              </p>
            </div>

            <div className="icons_container">
              <GrFormPrevious
                onClick={onPagePrevious}
                style={{ color: currentPage === 1 ? "rgb(108, 115, 127)" : "" }}
              />
              <GrFormNext
                onClick={onPageNext}
                style={{
                  color:
                    currentPage === Math.ceil(products.length / productsPerPage)
                      ? "rgb(108, 115, 127)"
                      : "",
                }}
              />
            </div>
          </ContainerChangePage>
        </div>
        <div className="aside">
          <CategoryRings categories={fakeCategoriesMenu} products={products} />
        </div>
      </div>
    </MenuStyled>
  );
}

const ContainerChangePage = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 20px;

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.57;
    flex-shrink: 0;
  }

  .icons_container {
    display: flex;
    svg {
      cursor: pointer;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-size: 1.5rem;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding: 5px;

      &:hover {
        background-color: rgba(108, 115, 127, 0.04);
      }
    }
  }
`;

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

  .change_page_next_cards {
  }
`;
