import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Button } from "../Button";
import { StyledCartTotal } from "./style";

export const CartTotal = () => {
  const { cartList, setCartList, setShowCart } = useContext(ProductsContext);
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

  const fechaPedido = () => {
    alert("PEDIDO FINALIZADO COM SUCESSO");
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
          onClick={() => fechaPedido()}
          content="Finalizar Pedido"
          color={"primary"}
        />
      </div>
    </StyledCartTotal>
  );
};
