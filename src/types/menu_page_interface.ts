import { Product } from "./base_interface";


export interface UseMenuFunctionsReturn {
    products: Product[];
    search: string;
    category: string;
    selectedProduct: Product | null;
    asideOpen: boolean;
    currentPage: number;
    productsPerPage: number;
    currentProducts: Product[];
    onPageNext: () => void;
    onPagePrevious: () => void;
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onProductClick: (product: Product) => void;
    closeAside: () => void;
  }