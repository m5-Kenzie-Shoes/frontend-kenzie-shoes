import * as yup from "yup";

export const ModalSchema = yup.object().shape({
  password: yup.string().notRequired(),
  /* .min(6, "* mínimo de 6 caracteres"), */
  rePassword: yup
    .string()
    /* .min(6, "* mínimo de 6 caracteres") */
    .oneOf(
      [yup.ref("password"), null],
      "* necessário que as senhas sejam iguais"
    ),
  img: yup.string(),
  address: yup.object({
    street: yup.string(),
    number: yup.string() /* .notRequired().nullable().optional(), */,
    city: yup.string(),
    state: yup.string(),
    /* .notRequired()
      .nullable()
      .optional()
      .min(2, "* campo precisa ter 2 caracteres")
      .max(2, "* campo precisa ter 2 caracteres"), */
    zipcode: yup.string(),
  }),
});
