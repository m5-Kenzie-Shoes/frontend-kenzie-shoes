import logo from "../../images/logo.png";
import userImg from "../../images/perfil.png";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { UserContext } from "../../context/UserContext";
import { Button } from "../Button";
import { transformToSeller } from "../../services/users";
import { ModalOrders } from "../modalChakra";


export const Header = () => {
  const { logout } = useContext(UserContext);
  const { cartList, showCart, setShowCart, setShowAddProducts } =
    useContext(ProductsContext);
  const { user, setShowProfileModal } = useContext(UserContext);
  const userId = localStorage.getItem("@USER_ID");

  const userSell = async () => {
    await transformToSeller(Number(userId!));
    setShowAddProducts(true);
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
              content={"VENDER"}
            />
          )}
          <InputSearch />
          <div>
            {userId && (
              <>
                <ModalOrders />
                <div>
                  <button onClick={() => setShowCart(!showCart)}>
                    <FaShoppingCart size={25} color={"var(--color-gray-50)"} />
                  </button>
                  <span>{cartList.length}</span>
                </div>
              </>
            )}

            <button onClick={() => logout()}>
              <TbLogout size={30} color={"var(--color-gray-100)"} />
            </button>
            {userId && (
              <button onClick={() => setShowProfileModal(true)}>
                <img
                  className="userImg"
                  src={user!.image_user ? user!.image_user : userImg}
                  alt=""
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
