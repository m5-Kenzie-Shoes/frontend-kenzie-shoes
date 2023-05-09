export interface ProductsProvider {
  children: React.ReactNode;
}

export interface Products {
  id: number;
  name: string;
  category:
    | "Botas"
    | "Chinelos e Sandálias"
    | "Chuteiras"
    | "Sapatênis"
    | "Tênis"
    | "Tênis de corrida";
  description: string;
  image_product: string;
  stock: number;
  user: number;
  value: number;
}

export interface ProductList {
  products: Products;
}

export interface ProductArrayList {
  products: Products[];
}

export interface CartItem {
  id: number;
  name: string;
  value: number;
  image_product: string;
  quantity: number;
  stock: number;
  cart_id: number;
}

export interface CartList {
  cartItem: CartItem;
}

export interface CartArrayList {
  cartItem: CartItem[];
}

export interface ProductsContext {
  wordSearch: string;
  setWordSearch: React.Dispatch<React.SetStateAction<string>>;
  products: Products[] | [];
  setProducts: React.Dispatch<React.SetStateAction<Products[] | []>>;
  cartList: CartItem[];
  setCartList: React.Dispatch<React.SetStateAction<CartItem[] | []>>;
  filteredProducts: Products[] | [];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Products[] | []>>;
  cleanSearch: () => void;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartId: number | null;
  setCartId: React.Dispatch<React.SetStateAction<number | null>>;
}
