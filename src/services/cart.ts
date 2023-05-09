import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "./api";
// import * as i from "../interfaces/UserInterfaces";

export const fillCart = async (product_id: number) => {
  try {
    const { data, status } = await api.post(`products/${product_id}/cart/`);
    console.log(data);
    status === 201 && toast.success("Enviado para o Carrinho!");

    return data;
  } catch (error) {
    const message = error as AxiosError<string>;
    console.log(message);
    return false;
  }
};

export const updateQuantitiesCart = async (
  cart_id: number,
  new_quantity: number
) => {
  try {
    const { data, status } = await api.patch(`cart/${cart_id}/`, {
      quantities: new_quantity,
    });

    status === 200 && toast.success("Quantidade alterada com sucesso!");

    return data;
  } catch (error) {
    const message = error as AxiosError<string>;
    console.log(message);
    return false;
  }
};

export const removeItemCart = async (product_id: number) => {
  try {
    const { data, status } = await api.delete(`cart/${product_id}/`);

    status === 204 && toast.success("Retirado do carrinho com sucesso!");

    return data;
  } catch (error) {
    const message = error as AxiosError<string>;
    console.log(message);
    return false;
  }
};

export const deleteCart = async (user_id: number) => {
  try {
    const { data, status } = await api.delete(`cart/${user_id}/`);

    status === 204 && toast.success("Itens removidos com sucesso!");

    return data;
  } catch (error) {
    const message = error as AxiosError<string>;
    console.log(message);
    return false;
  }
};
