import logo from "../../images/logo.svg";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { UserContext } from "../../context/UserContext";

export const Header = () => {
  const { logout } = useContext(UserContext);
  const { cartList, showCart, setShowCart } = useContext(ProductsContext);

  return (
    <StyledHeader>
      <div className="container">
        <img src={logo} alt="logomarca Burguer Kenzie" />
        <div>
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
