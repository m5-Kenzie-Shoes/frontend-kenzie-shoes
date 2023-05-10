import homem from "../../images/homem-comum.jpg";
import { getProducts } from "../../services/products";
import { CardReviewStyled } from "./style";
import * as i from "../../interfaces/ProductsInterfaces";

export const CardReview = async (): Promise<any> => {
  return (
    <CardReviewStyled>
      <img src={homem} alt="" />
      <div>
        <span className="font-headline-3">Sapato</span>
        <span className="font-heading-1-green">R$12,00</span>
      </div>
    </CardReviewStyled>
  );
};
