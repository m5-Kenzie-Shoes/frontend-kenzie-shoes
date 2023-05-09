import { CartTotal } from "../CartTotal";
import { CartProduct } from "../CartProduct";
import { StyledCart } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { AnimSlideDown } from "../../animation";
import { UserContext } from "../../context/UserContext";

export const Cart = () => {
  const { showCart } = useContext(ProductsContext);
  const { cartList } = useContext(UserContext);

  return showCart ? (
    <StyledCart>
      <AnimSlideDown>
        <div>
          <h4>Carrinho de compras</h4>
        </div>
        {!cartList.length ? (
          <div>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        ) : (
          <ul>
            {cartList.map((cartItem) => (
              <CartProduct key={cartItem.id} cartItem={cartItem} />
            ))}
          </ul>
        )}
        {cartList.length ? <CartTotal /> : ""}
      </AnimSlideDown>
    </StyledCart>
  ) : (
    <></>
  );
};
