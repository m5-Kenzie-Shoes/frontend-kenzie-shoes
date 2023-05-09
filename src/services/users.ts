import { AxiosError } from "axios";
import { toast } from "react-toastify";
import * as i from "../interfaces/UserInterfaces";
import { api } from "./api";

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

export const getUserById = async (user_id: number) => {
  try {
    const { data, status } = await api.get(`users/${user_id}/`);
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
