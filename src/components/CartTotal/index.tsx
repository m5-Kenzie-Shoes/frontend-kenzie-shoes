import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Button } from "../Button";
import { StyledCartTotal } from "./style";
import { decreaseStock, getProductById, getProducts } from "../../services/api";
import { UserContext } from "../../context/UserContext";

export const CartTotal = () => {
  const { cartList, setCartList, setShowCart, setProducts } =
    useContext(ProductsContext);
  const { reloadRender, setReloadRender, setLoadUser } =
    useContext(UserContext);
  const cartSum = cartList.reduce(
    (acc, current) => acc + current.value * current.quantity,
    0
  );
  const formattedTotal = cartSum.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const cleanCart = () => {
    setCartList([]);
    setShowCart(false);
  };

  const fechaPedido = async () => {
    await Promise.all(
      cartList.map(async (item) => {
        const getProduct = await getProductById(item.id);
        const newStock = getProduct.stock - item.quantity;
        await decreaseStock(item.id, newStock);
      })
    );
    setCartList([]);
    setShowCart(false);
    setReloadRender(!reloadRender);
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
          onClick={() => cleanCart()}
        />
        <Button
          size="medium"
          onClick={async () => await fechaPedido()}
          content="Finalizar Pedido"
          color={"primary"}
        />
      </div>
    </StyledCartTotal>
  );
};
