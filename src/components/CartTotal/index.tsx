import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Button } from "../Button";
import { StyledCartTotal } from "./style";

export const CartTotal = () => {
  const { cartList, setCartList, setShowCart } = useContext(ProductsContext);
  const cartSum = cartList.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );
  const formatedTotal = cartSum.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const cleanCart = () => {
    setCartList([]);
    setShowCart(false);
  };

  return (
    <StyledCartTotal>
      <div>
        <h3 className="font-heading-4">Total</h3>
        <span className="font-body-600-gray">{formatedTotal}</span>
      </div>
      <Button
        size="default"
        color="gray"
        content="Remover Todos"
        onClick={() => cleanCart()}
      />
    </StyledCartTotal>
  );
};
