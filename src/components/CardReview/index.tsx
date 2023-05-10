import homem from "../../images/sapatos-masculinos.jpg";
import { CardReviewStyled } from "./style";

export const CardReview = () => {
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
