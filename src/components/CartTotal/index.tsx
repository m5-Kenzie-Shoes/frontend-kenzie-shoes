import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Button } from "../Button";
import { StyledCartTotal } from "./style";
import { UserContext } from "../../context/UserContext";
import { removeItemCart } from "../../services/cart";
import { createOrder } from "../../services/users";

export const CartTotal = () => {
  const { cartList, setCartList, setShowCart } = useContext(ProductsContext);
  const { reloadRender, setReloadRender, loadUser, setLoadUser } =
    useContext(UserContext);
  const cartSum = cartList.reduce(
    (acc, current) => acc + current.value * current.quantity,
    0
  );
  const formattedTotal = cartSum.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const clearCart = () => {
    cartList &&
      cartList.map(async (item) => {
        await removeItemCart(item.cart_id);
      });

    setCartList([]);
    setShowCart(false);
  };

  const closeOrder = async () => {
    setLoadUser(true);
    await createOrder();

    clearCart();
    setReloadRender(!reloadRender);
    setLoadUser(false);
  };

  return (
    <StyledCartTotal>
      <div>
        <h3 className="font-heading-4">Total</h3>
        <span className="font-body-600-gray">{formattedTotal}</span>
      </div>
      <div>
        <Button
          size="medium"
          color="gray"
          content="Remover Todos"
          onClick={() => clearCart()}
        />
        <Button
          size="medium"
          onClick={async () => await closeOrder()}
          content="Finalizar Pedido"
          color={"primary"}
        />
      </div>
    </StyledCartTotal>
  );
};
