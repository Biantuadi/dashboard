export interface Product {
    id: number;
    name: string;
    unity?: string;
    price?: number;
    iconProduct?: string;
    description?: string;
    creator_id?: number;
    tax?: number;
    cost?: number;
    category_id?: number;
  }
  
  export interface Category {
    id: number;
    name: string;
    icon?: string;
  }
  