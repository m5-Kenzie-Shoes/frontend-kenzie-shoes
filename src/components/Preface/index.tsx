import logo from "../../images/logo.svg";
import item from "../../images/item.svg";
import elipses from "../../images/elipses.svg";
import { StyledPreface } from "./style";

export const Preface = () => {
  return (
    <StyledPreface>
      <img src={logo} alt="logotipo burguer kenzie" />
      <div>
        <img src={item} alt="icone quadrado verde" />
        <p className="font-body">
          A vida é como um sanduíche, é preciso recheá-la com os
          <strong> melhores</strong> ingredientes.
        </p>
      </div>
      <img src={elipses} alt="diversos círculos pequenos" />
    </StyledPreface>
  );
};
