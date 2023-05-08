import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup.string().required("* campo obrigatório"),
  first_name: yup.string().required("* campo obrigatório"),
  last_name: yup.string().required("* campo obrigatório"),
  email: yup
    .string()
    .required("* campo obrigatório")
    .email("* endereço de e-mail inválido"),
  password: yup
    .string()
    .required("* campo obrigatório")
    .min(6, "* mínimo de 6 caracteres"),
  rePassword: yup
    .string()
    .required("* campo obrigatório")
    .min(6, "* mínimo de 6 caracteres")
    .oneOf(
      [yup.ref("password"), null],
      "* necessário que as senhas sejam iguais"
    ),
  img: yup.string(),
  address: yup.object({
    street: yup.string().required("* campo obrigatório"),
    number: yup.string().required("* campo obrigatório"),
    add_on: yup.string().max(5, "máximo de 5 caracteres"),
    city: yup.string().required("* campo obrigatório"),
    state: yup
      .string()
      .required("* campo obrigatório")
      .min(2, "* campo precisa ter 2 caracteres")
      .max(2, "* campo precisa ter 2 caracteres"),
    zipcode: yup.string().required("* campo obrigatório"),
  }),
});
