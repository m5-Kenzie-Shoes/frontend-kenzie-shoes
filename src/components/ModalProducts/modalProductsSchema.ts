import * as yup from "yup";

export const ModalSchema = yup.object().shape({
  name: yup
    .string()
    .required("* campo obrigatório")
    .min(6, "* mínimo de 6 caracteres"),
  description: yup
    .string()
    .required("* campo obrigatório")
    .min(6, "* mínimo de 6 caracteres"),
  value: yup
    .number()
    .required("* campo obrigatório")
    .min(6, "* mínimo de 6 caracteres"),
  category: yup
    .string()
    .required("* campo obrigatório")
    .min(6, "* mínimo de 6 caracteres"),
  stock: yup.number().required("* campo obrigatório"),
  image_product: yup.string().required("* campo obrigatório"),
});
