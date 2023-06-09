import { useContext } from "react";
import { AnimSlideDown } from "../../animation";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { ProductList } from "../../components/ProductList";
import { ProductsContext } from "../../context/ProductsContext";
import { UserContext } from "../../context/UserContext";
import { StyledDashboard } from "./style";
import { Modal } from "../../components/Modals";
import { ModalProducts } from "../../components/ModalProducts";

export const DashboardPage = () => {
  const { loadUser } = useContext(UserContext);
  const { products, filteredProducts } = useContext(ProductsContext);

  return !loadUser ? (
    <>
      <ModalProducts />
      <Modal />
      <ModalProducts />
      <Header />
      <AnimSlideDown>
        <StyledDashboard>
          {products.length == 0 ? (
            <div>
              <p>Nenhum produto a Venda no momento!</p>
            </div>
          ) : (
            <ProductList
              products={
                filteredProducts.length != 0 ? filteredProducts : products
              }
            />
          )}
          <Cart />
        </StyledDashboard>
      </AnimSlideDown>
    </>
  ) : (
    <>
      <Loader />
    </>
  );
};
