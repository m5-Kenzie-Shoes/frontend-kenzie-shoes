import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import imgHero from "../../images/imgHero.png";
import { StyledHero } from "./style";
import { StyledLink } from "../../styles/link";

export const Hero = () => {
  return (
    <StyledHero>
      <div>
        <div className="heroCabecalho">
          <img className="logoKenzieShoes" src={logo} alt="logo KenzieShoes" />
          <div>
            <StyledLink to={"./login"} typetext="yes">
              Login
            </StyledLink>
            <StyledLink to={"./register"} typetext="button">
              Cadastre-se
            </StyledLink>
          </div>
        </div>
        <div className="heroBanner">
          <div>
            <span className="font-title">Construa seu próprio estilo</span>
            <span className="font-title">Compre na KenzieShoes</span>
            <span>A maior loja on-line de calçados masculinos do Brasil</span>
            <StyledLink to={"./dashboard"} typetext="button">
              Conheça a KenzieShoes
            </StyledLink>
          </div>
          <img className="imgHero" src={imgHero} alt="Imagem hero" />
        </div>
      </div>
    </StyledHero>
  );
};
