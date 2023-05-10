import { StyledProducts } from "./style";
import { toast } from "react-toastify";
import { Button } from "../Button";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { fillCart } from "../../services/cart";
import { useNavigate } from "react-router-dom";
import * as i from "../../interfaces/ProductsInterfaces";

export const Products = ({ products }: i.ProductList) => {
  const navigate = useNavigate();
  const { setCartId, cartList, setCartList } = useContext(ProductsContext);
  const { id, name, image_product, category, description, stock, value } =
    products;

  const formattedPrice = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const addProduct = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      toast.error("É preciso estar logado para comprar ou vender!");
      navigate("/login");
      return;
    }
    const duplicatedItem = cartList.some((item) => item.id === products.id);

    if (!duplicatedItem) {
      const response = await fillCart(id);
      const newProduct = {
        ...products,
        quantity: 1,
        cart_id: response.id,
      };

      setCartId(response.id);
      setCartList([...cartList, newProduct]);
    } else {
      toast.error("Produto já está no carrinho!");
    }
  };

  return (
    <StyledProducts>
      <div>
        <img src={image_product} alt={name} />
      </div>
      <div>
        <div>
          <h3 className="font-heading-3">{name}</h3>
          <span className="caption">{category}</span>
          <p>{description}</p>
        </div>
        <div>
          <div>
            <h4 className="font-body-600">{"R$ " + formattedPrice}</h4>
            <span>Estoque: {stock} </span>
          </div>
          <Button
            size="medium"
            color={stock != 0 ? "primary" : "disable"}
            content={stock != 0 ? "Adicionar" : "Indisponível"}
            onClick={() => addProduct()}
          />
        </div>
      </div>
    </StyledProducts>
  );
};
