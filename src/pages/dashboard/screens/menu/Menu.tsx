import TitlePage from "../../../../components/TitlePage";
import styled from "styled-components";
import ProductCard from "./widgets/product/Card";
import ProductEditor from "./widgets/nav/ProductEditor";
import Tresor from "../../../../assets/avantar/avatar-marcus.png";
import { fakeCategoriesMenu } from "../../../../data/category_product";
import ContainerSearch from "./widgets/ContainerSearch";
import ContainerChangePage from "./widgets/ContainerChangePage";
import { useMenuFunctions } from "./widgets/functions/MenuFunctions";

export default function Menu(): JSX.Element {
  const {
    products,
    search,
    category,
    selectedProduct,
    asideOpen,
    currentPage,
    productsPerPage,
    currentProducts,
    onPageNext,
    onPagePrevious,
    onSearch,
    onCategoryChange,
    onProductClick,
    closeAside,
  } = useMenuFunctions();

  

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

          <ContainerChangePage
            currentPage={currentPage}
            totalPages={Math.ceil(products.length / productsPerPage)}
            onPageNext={onPageNext}
            onPagePrevious={onPagePrevious}
          />
        </div>
        <div className="aside">
          <h2>Categories</h2>
        </div>
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

  .change_page_next_cards {
  }
`;
