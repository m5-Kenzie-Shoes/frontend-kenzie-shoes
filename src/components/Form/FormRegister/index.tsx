import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm } from "../style";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import * as i from "../../../interfaces/UserInterfaces";

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
    <StyledForm onSubmit={handleSubmit(registerSubmit)} noValidate>
      <div>
        <h3 className="font-heading-3">Cadastro</h3>
        <Link to={"/"}>
          <span className="font-body">Retornar para o login</span>
        </Link>
      </div>
      <Input
        type="text"
        name="Nome"
        register={register("name")}
        error={errors.name?.message}
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
      <Button content="Cadastrar" size="default" color="gray" />
    </StyledForm>
  );
};
