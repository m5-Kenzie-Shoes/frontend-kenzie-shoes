import logoBranca from "../../images/logowhite.png";
import { StyledFooter } from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <img className="logoBranca" src={logoBranca} alt="logo branca" />
    </StyledFooter>
  );
};
