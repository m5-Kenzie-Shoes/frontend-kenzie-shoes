import { useContext } from "react";
import { Button } from "../Button";
import { Products } from "../Products";
import { StyledProductList } from "./style";
import { ProductsContext } from "../../context/ProductsContext";
import * as i from "../../interfaces/ProductsInterfaces";

export const ProductList = ({ products }: i.ProductArrayList) => {
  const { wordSearch, cleanSearch } = useContext(ProductsContext);
  return (
    <StyledProductList>
      {wordSearch && (
        <div className="result">
          <h2 className="font-heading-1">
            Resultados para: <span className="font-gray"> {wordSearch} </span>
          </h2>
          <Button
            size="medium"
            color="primary"
            content="Limpar busca"
            onClick={() => cleanSearch()}
          />
        </div>
      )}
      <ul>
        {products.map((product) => (
          <Products key={product.id} products={product} />
        ))}
      </ul>
    </StyledProductList>
  );
};
