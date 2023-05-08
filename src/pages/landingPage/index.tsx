import { CardReview } from "../../components/CardReview";
import { Hero } from "../../components/hero";
import banner from "../../images/banner.png";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <img className="imgBanneLP" src={banner} alt="bannerKenzieShoes" />
        <div className="cardReviewContainer">
          <div>
            <CardReview />
          </div>
        </div>
      </div>
    </>
  );
};
