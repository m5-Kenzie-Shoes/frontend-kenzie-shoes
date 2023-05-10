import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "./api";

export const fillCart = async (product_id: number) => {
  try {
    const { data, status } = await api.post(`products/${product_id}/cart/`, {
      quantities: 1,
    });
    // console.log(data);
    status === 201 && toast.success("Enviado para o carrinho!");

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

    status === 200 && toast.success("Quantidade do item alterada!");

    return data;
  } catch (error) {
    const message = error as AxiosError<string>;
    console.log(message);
    return false;
  }
};

export const removeItemCart = async (cart_id: number) => {
  try {
    const { data, status } = await api.delete(`cart/${cart_id}/`);

    status === 204 && toast.success("Removido do carrinho!");

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

    status === 204 && toast.success("Todos os itens foram removidos!");

    return data;
  } catch (error) {
    const message = error as AxiosError<string>;
    console.log(message);
    return false;
  }
};
