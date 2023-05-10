import homem from "../../images/homem-comum.jpg";
import { getProducts } from "../../services/products";
import { CardReviewStyled } from "./style";
import * as i from "../../interfaces/ProductsInterfaces";
import { useEffect, useState } from "react";

export const CardReview = async (): Promise<any> => {
  const [renderCard, setRenderCard] = useState([])
  useEffect(() => {
    setRenderCard(getProducts())
  }

  const render = renderCard?.map((product: i.Products) => (
    <CardReviewStyled>
      <img src={homem} alt="" />
      <div>
        <span className="font-headline-3">{product.name}</span>
        <span className="font-heading-1-green">R$12,00</span>
      </div>
    </CardReviewStyled>
  ));

  return render;
};
