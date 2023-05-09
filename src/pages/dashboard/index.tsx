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
import blackImg from "../../images/black.jpeg";

export const DashboardPage = () => {
  const { loadUser } = useContext(UserContext);
  const { products, filteredProducts } = useContext(ProductsContext);
  const { showProfileModal, setShowProfileModal } = useContext(UserContext);
  return !loadUser ? (
    <>
      <Header />
      <AnimSlideDown>
        <StyledDashboard>
          <ProductList
            products={
              filteredProducts.length != 0 ? filteredProducts : products
            }
          />
          <Cart />
          <Modal />
        </StyledDashboard>
      </AnimSlideDown>
    </>
  ) : (
    <>
      <Loader />
    </>
  );
};
