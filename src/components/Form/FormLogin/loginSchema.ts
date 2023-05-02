import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("* campo obrigatório")
    .email("* endereço de e-mail inválido"),
  password: yup.string().required("* campo obrigatório"),
});
