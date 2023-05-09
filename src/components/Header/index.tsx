import logo from "../../images/logo.png";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { UserContext } from "../../context/UserContext";
import { Button } from "../Button";
import { transformToSeller } from "../../services/users";

export const Header = () => {
  const { logout } = useContext(UserContext);
  const { cartList, showCart, setShowCart } = useContext(ProductsContext);
  const userId = localStorage.getItem("@USER_ID");

  const userSell = async () => {
    await transformToSeller(Number(userId!));
  };

  return (
    <StyledHeader>
      <div className="container">
        <img className="newLogo" src={logo} alt="logomarca Kenzie Shoes" />
        <div>
          {userId && (
            <Button
              onClick={() => userSell()}
              size="medium"
              color="gray"
              content={"VENDA AQUI"}
            />
          )}
          <InputSearch />
          <div>
            <div>
              <button onClick={() => setShowCart(!showCart)}>
                <FaShoppingCart size={25} color={"var(--color-gray-50)"} />
              </button>
              <span>{cartList.length}</span>
            </div>
            <button onClick={() => logout()}>
              <TbLogout size={30} color={"var(--color-gray-100)"} />
            </button>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
