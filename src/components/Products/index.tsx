import { StyledProducts } from "./style";
import { toast } from "react-toastify";
import { Button } from "../Button";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import * as i from "../../interfaces/ProductsInterfaces";

export const Products = ({ products }: i.ProductList) => {
  const { cartList, setCartList } = useContext(ProductsContext);
  const { id, name, image_product, category, description, user, value } =
    products;
  const formattedPrice = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const addProduct = () => {
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
    };

    if (!duplicatedItem) {
      setCartList([...cartList, newProduct]);
      toast.success("Enviado para o carrinho!");
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
          <h4 className="font-body-600">{"R$ " + formattedPrice}</h4>
          <Button
            size="medium"
            color="primary"
            content="Adicionar"
            onClick={() => addProduct()}
          />
        </div>
      </div>
    </StyledProducts>
  );
};
