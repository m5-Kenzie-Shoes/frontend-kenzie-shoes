import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct, getProducts } from "../services/products";
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import * as i from "../interfaces/ProductsInterfaces";
import { getUserById } from "../services/users";

export const ProductsContext = createContext({} as i.ProductsContext);

export const ProductsProvider = ({ children }: i.ProductsProvider) => {
  const navigate = useNavigate();
  const [wordSearch, setWordSearch] = useState("");
  const [products, setProducts] = useState<i.Products[] | []>([]);
  const [cartList, setCartList] = useState([] as i.CartItem[]);
  const [cartId, setCartId] = useState<number | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<i.Products[] | []>(
    []
  );
  const [showCart, setShowCart] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const { reloadRender, setLoadUser, setUser } = useContext(UserContext);

  useEffect(() => {
    const loadProducts = async () => {
      setLoadUser(true);
      const token = localStorage.getItem("@TOKEN");
      const userId = localStorage.getItem("@USER_ID");
      if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
      }

      setUser(await getUserById(Number(userId)));

      const productsResponse = await getProducts();

      if (productsResponse) {
        setProducts(productsResponse);
        navigate("/dashboard");
      }

      if (userId) {
        const cartString = localStorage.getItem("@CART_LIST");

        if (cartString) {
          const cartJson = JSON.parse(cartString!);
          setCartList(cartJson);
        }
      } else {
        localStorage.clear();
        navigate("/");
      }
      setLoadUser(false);
    };

    loadProducts();
  }, [reloadRender]);

  const cleanSearch = () => {
    setWordSearch("");
    setFilteredProducts([]);
  };

  const ProductsSubmit = async (data: i.Products) => {
    const response = await createProduct(data);

    response && navigate("/login");
  };

  return (
    <ProductsContext.Provider
      value={{
        wordSearch,
        setWordSearch,
        products,
        setProducts,
        cartList,
        setCartList,
        filteredProducts,
        setFilteredProducts,
        cleanSearch,
        showCart,
        setShowCart,
        cartId,
        setCartId,
        ProductsSubmit,
        showProfileModal,
        setShowProfileModal,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
