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
    number: yup.number().positive().required("* campo obrigatório"),
    add_on: yup.string(),
    city: yup.string().required("* campo obrigatório"),
    state: yup.string().min(2).max(2).required("* campo obrigatório"),
    zipcode: yup.string().required("* campo obrigatório"),
  }),
});
