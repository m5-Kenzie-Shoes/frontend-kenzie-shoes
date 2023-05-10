import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "./api";
import * as i from "../interfaces/ProductsInterfaces";

export const createProduct = async (body: i.Products) => {
  try {
    const { data, status } = await api.post("products/", body);

    status === 201 && toast.success("Produto cadastrado com Sucesso!");

    return data;
  } catch (error) {
    const message = error as AxiosError<any>;
    console.log(message);
    return false;
  }
};

export const getProducts = async () => {
  try {
    const { data } = await api.get("products/");

    return data;
  } catch (error) {
    const message = error as AxiosError<any>;
    console.log(message.response?.data);
    message.response?.data.code === "token_not_valid" &&
      toast.error("Token espirado! Faça Login novamente!");

    return false;
  }
};

export const getProductById = async (product_id: number) => {
  try {
    const { data } = await api.get(`products/${product_id}`);
    return data;
  } catch (error) {
    const message = error as AxiosError<string>;
    console.log(message.response?.data);
    message.response?.data === "token_not_valid" &&
      toast.error("Token espirado! Faça Login novamente!");
    return false;
  }
};

export const decreaseStock = async (product_id: number, stock: number) => {
  try {
    const { data, status } = await api.patch(`products/${product_id}/`, {
      stock: stock,
    });

    status === 200 && toast.success("Pedido Finalizado com Sucesso!");

    return data;
  } catch (error) {
    const message = error as AxiosError<string>;
    console.log(message);
    return false;
  }
};
