import { useState } from "react";
import { fakeProductsMenu } from "../../../../../../data/data_products";
import convertirCaracteresSpeciaux from "../../../../../../utils/main_utils";
import { UseMenuFunctionsReturn } from "../../../../../../types/menu_page_interface";
import { Product } from "../../../../../../types/base_interface";

export function useMenuFunctions(): UseMenuFunctionsReturn {
  const [products, setProducts] = useState<Product[]>(fakeProductsMenu);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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

  const onProductClick = (product: Product): void => {
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
  const currentProducts: Product[] = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return {
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
  };
}
