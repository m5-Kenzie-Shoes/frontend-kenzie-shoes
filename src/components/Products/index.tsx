import { StyledProducts } from "./style";
import { toast } from "react-toastify";
import { Button } from "../Button";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import * as i from "../../interfaces/ProductsInterfaces";
import { fillCart } from "../../services/cart";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Products = ({ products }: i.ProductList) => {
  const navigate = useNavigate();
  const { cartList, setCartId, setCartList } = useContext(ProductsContext);
  const { id, name, image_product, category, description, user, stock, value } =
    products;

  const formattedPrice = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const addProduct = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      toast.error("Faça Login para efetuar compras!");
      navigate("/login");
      return;
    }
    const duplicatedItem = cartList.some((item) => item.id === products.id);
    const newProduct = {
      id: id,
      name: name,
      image_product: image_product,
      category: category,
      value: value,
      user: user,
      description: description,
      quantity: 1,
      stock: stock,
    };

    if (!duplicatedItem) {
      setCartList([...cartList, newProduct]);
      const response = await fillCart(id);
      setCartId(response.id);
      console.log(response.id);
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
