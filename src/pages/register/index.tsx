import { Preface } from "../../components/Preface";
import { FormRegister } from "../../components/Form/FormRegister";
import { StyledRegister } from "./style";
import { AnimSlideLeft, AnimSlideRight } from "../../animation";

export const RegisterPage = () => {
  return (
    <StyledRegister>
      {/* <AnimSlideRight>
        <Preface />
      </AnimSlideRight> */}
      {/* <AnimSlideLeft> */}
      <FormRegister />
      {/* </AnimSlideLeft> */}
    </StyledRegister>
  );
};
