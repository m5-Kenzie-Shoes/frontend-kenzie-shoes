import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormRegister } from "./style";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import * as i from "../../../interfaces/UserInterfaces";
import { AnimSlideLeft, AnimSlideRight } from "../../../animation";

export const FormRegister = () => {
  const { registerSubmit } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<i.DataRegister>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledFormRegister onSubmit={handleSubmit(registerSubmit)} noValidate>
      <AnimSlideLeft>
        <div>
          <div>
            <h3 className="font-heading-3">Dados pessoais</h3>
            {/*  <Link to={"/"}>
            <span className="font-body">Retornar para o login</span>
          </Link> */}
          </div>
          <Input
            type="text"
            name="Username"
            register={register("username")}
            error={errors.username?.message}
          />
          <Input
            type="text"
            name="Nome"
            register={register("first_name")}
            error={errors.first_name?.message}
          />
          <Input
            type="text"
            name="Sobrenome"
            register={register("last_name")}
            error={errors.last_name?.message}
          />
          <Input
            type="text"
            name="Email"
            register={register("email")}
            error={errors.email?.message}
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
          <Input
            type="text"
            name="Foto Perfil"
            register={register("img")}
            error={errors.img?.message}
          />
        </div>
      </AnimSlideLeft>
      <AnimSlideRight>
        <div>
          <div>
            <h3 className="font-heading-3">Endereço</h3>
            <Link to={"/login"}>
              <span className="font-body">Retornar para o login</span>
            </Link>
          </div>
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
          <Input
            type="text"
            name="Complemento"
            register={register("address.add_on")}
            error={errors.address?.add_on?.message}
          />
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
          <Button content="Cadastrar" size="default" color="gray" />
        </div>
      </AnimSlideRight>
    </StyledFormRegister>
  );
};
