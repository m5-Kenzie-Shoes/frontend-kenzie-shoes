import { useContext } from "react";
import { CardReview } from "../../components/CardReview";
import { Loader } from "../../components/Loader";
import { Footer } from "../../components/footer";
import { Hero } from "../../components/hero";
import banner from "../../images/banner.png";
import passo from "../../images/passoapasso.png";
import { StyledLink } from "../../styles/link";
import { UserContext } from "../../context/UserContext";

export const LandingPage = () => {
  const { loadUser } = useContext(UserContext);

  return !loadUser ? (
    <>
      <Hero />
      <div className="container">
        <img className="imgBanneLP" src={banner} alt="bannerKenzieShoes" />
        <div className="cardReviewContainer">
          <div className="cardReviewListContainer">
            <CardReview />
          </div>
        </div>
        <div className="buttonCenter">
          <StyledLink
            className="buttonCenter"
            to={"./dashboard"}
            typetext="button"
          >
            Compre agora na KenzieShoes
          </StyledLink>
        </div>
        <div className="divPasso">
          <span className="font-title">
            Quer se tornar parceiro KenzieShoes?
          </span>
          <img className="imgPasso" src={passo} />
          <StyledLink
            className="buttonCenter"
            to={"./dashboard"}
            typetext="button"
          >
            Quero me tornar parceiro KenzieShoes
          </StyledLink>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <>
      <Loader />
    </>
  );
};
