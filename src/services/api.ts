import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import * as i from "../interfaces/UserInterfaces";

export const api = axios.create({
  // baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com",
  baseURL: "http://localhost:8000/api/",
  timeout: 5000,
});

export const getProducts = async () => {
  try {
    const { data } = await api.get("products/");
    // console.log(data);
    return data;
  } catch (error) {
    const message = error as AxiosError<string>;
    console.log(message.response?.data);
    message.response?.data === "jwt expired" &&
      toast.error("Token espirado! Faça Login novamente!");
    return false;
  }
};

export const getProductById = async (product_id: number) => {
  try {
    const { data } = await api.get(`products/${product_id}`);
    // console.log(data);
    return data;
  } catch (error) {
    const message = error as AxiosError<string>;
    console.log(message.response?.data);
    message.response?.data === "jwt expired" &&
      toast.error("Token espirado! Faça Login novamente!");
    return false;
  }
};

export const createUser = async (body: i.DataRegister) => {
  try {
    const { data, status } = await api.post("users/", body);

    status === 201 && toast.success("Usuário cadastrado com Sucesso!");

    return data;
  } catch (error) {
    const message = error as AxiosError<any>;
    console.log(message);
    if (message.response?.data.username[0]) {
      message.response?.data.username[0] ===
        "user with this username already exists." &&
        toast.error("Username já cadastrado!");
    }
    if (message.response?.data.email[0]) {
      message.response?.data.email[0] === "This field must be unique." &&
        toast.error("Email já cadastrado!");
    }
    return false;
  }
};

export const loginUser = async (body: i.DataLogin) => {
  try {
    const { status, data } = await api.post("users/login/", body);

    status === 200 &&
      ((api.defaults.headers.common.authorization = `Bearer ${data.accessToken}`),
      toast.success("Usuário logado com Sucesso!"));

    return data;
  } catch (error) {
    const message = error as AxiosError<any>;
    message.response?.data.detail ===
      "No active account found with the given credentials" &&
      toast.error("Usuário / Senha inválidos!");
    return false;
  }
};

export const decreaseStock = async (product_id: number, stock: number) => {
  try {
    const { data, status } = await api.patch(`products/${product_id}/`, {
      stock: stock,
    });

    status === 200 && toast.success("Quantidade retirada do estoque!");

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

export const transformToSeller = async (user_id: number) => {
  try {
    const { data, status } = await api.patch(`users/${user_id}/`, {
      is_seller: true,
    });
    console.log(data);
    status === 201 && toast.success("Enviado para o Carrinho!");

    return data;
  } catch (error) {
    const message = error as AxiosError<string>;
    console.log(message);
    return false;
  }
};
