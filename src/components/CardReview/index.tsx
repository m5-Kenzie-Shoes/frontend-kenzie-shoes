import homem from "../../images/homem-comum.jpg";
import { CardReviewStyled } from "./style";

export const CardReview = () => {
  return (
    <CardReviewStyled>
      <img src={homem} alt="" />
      <div>
        <span>Márcio Guerra</span>
        <span>
          Maravilhoso encontrar uma loja onde posso encontrar tudo que procuro
          com preço honesto
        </span>
      </div>
    </CardReviewStyled>
  );
};
