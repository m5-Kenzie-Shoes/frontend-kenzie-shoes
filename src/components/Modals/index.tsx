import { StyledProfile } from "./style";
import { useContext } from "react";
import { AnimSlideDown } from "../../animation";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalSchema } from "../../components/Modals/modalSchema";
import * as i from "../../interfaces/UserInterfaces";
import { Input } from "../Input";
import { Button } from "../Button";
import { getUserById } from "../../services/users";

export const Modal = () => {
  const { showProfileModal, setShowProfileModal, UserUpdateSubmit, userId } =
    useContext(UserContext);
  /* const user = await getUserById(userId!);
  console.log(user); */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<i.DataRegister>({
    mode: "onChange",
    resolver: yupResolver(ModalSchema),
  });

  return showProfileModal ? (
    <StyledProfile>
      <AnimSlideDown>
        <div className="divFormProfile">
          <div className="modalHeader">
            <h3>Editar Perfil</h3>
            <button
              className="buttonX"
              onClick={() => setShowProfileModal(false)}
            >
              X
            </button>
          </div>

          <form
            className="formProfile"
            onSubmit={handleSubmit(UserUpdateSubmit)}
            noValidate
          >
            <div className="inputs">
              <h4>Dados pessoais</h4>
              <Input
                type="text"
                name="Foto Perfil"
                register={register("img")}
                error={errors.img?.message}
              />
              <Input
                type="password"
                name="Senha"
                register={register("password")}
                error={errors.password?.message}
              />
              <Input
                type="password"
                name="Confirmar Senha"
                register={register("rePassword")}
                error={errors.rePassword?.message}
              />
            </div>
            <div className="inputs">
              <h4>Endereço</h4>
              <Input
                type="text"
                name="Rua"
                register={register("address.street")}
                error={errors.address?.street?.message}
              />
              <Input
                type="text"
                name="Numero"
                register={register("address.number")}
                error={errors.address?.number?.message}
              />
              {/* <Input
                type="text"
                name="Complemento"
                register={register("address.add_on")}
                error={errors.address?.add_on?.message}
              /> */}
              <Input
                type="text"
                name="Cidade"
                register={register("address.city")}
                error={errors.address?.city?.message}
              />
              <Input
                type="text"
                name="Estado"
                register={register("address.state")}
                error={errors.address?.state?.message}
              />
              <Input
                type="text"
                name="Cep"
                register={register("address.zipcode")}
                error={errors.address?.zipcode?.message}
              />
              <Button content="Atualizar" size="default" color="gray" />
            </div>
          </form>
        </div>
      </AnimSlideDown>
    </StyledProfile>
  ) : (
    <></>
  );
};
