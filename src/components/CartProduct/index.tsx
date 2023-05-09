import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { StyledCartProduct } from "./style";
import { ProductsContext } from "../../context/ProductsContext";
import { removeItemCart, updateQuantitiesCart } from "../../services/cart";
import * as i from "../../interfaces/ProductsInterfaces";
import { UserContext } from "../../context/UserContext";

export const CartProduct = ({ cartItem }: i.CartList) => {
  const { cartList, setCartList } = useContext(ProductsContext);
  const { reloadRender, setReloadRender } = useContext(UserContext);
  const { id, name, image_product, quantity, stock, cart_id } = cartItem;

  const removeItem = async () => {
    const selectedItem = cartList.filter((item) => item.id === cartItem.id);
    await removeItemCart(selectedItem[0].cart_id);
    const updatedList = cartList.filter((item) => item.id != cartItem.id);
    setCartList(updatedList);
    setReloadRender(!reloadRender);
  };

  const addItem = () => {
    cartList.map(async (item) => {
      if (item.id === id) {
        if (item.quantity < stock) {
          item.quantity += 1;
          await updateQuantitiesCart(cart_id!, item.quantity);
        }
      }
    });
    const updateList = cartList.map((item) => item);
    setCartList(updateList);
  };

  const subItem = () => {
    cartList.map(async (item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity -= 1;
        await updateQuantitiesCart(cart_id!, item.quantity);
      }
    });
    const updateList = cartList.map((item) => item);
    setCartList(updateList);
  };

  return (
    <StyledCartProduct>
      <div>
        <img src={image_product} alt={name} />
      </div>
      <div>
        <h4 className="font-heading-4">{name}</h4>
        <div>
          <button onClick={() => subItem()}>-</button>
          <span>{quantity}</span>
          <button onClick={() => addItem()}>+</button>
        </div>
      </div>
      <button className="caption" onClick={() => removeItem()}>
        <FaTrash size={20} color={"var(--color-primary)"} />
      </button>
    </StyledCartProduct>
  );
};
