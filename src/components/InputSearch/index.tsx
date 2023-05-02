import React, { useContext } from "react";
import { StyledInputSearch } from "./style";
import { toast } from "react-toastify";
import { Button } from "../Button";
import { ImSearch } from "react-icons/im";
import { ProductsContext } from "../../context/ProductsContext";
import { useForm } from "react-hook-form";

interface iOnSubmit {
  search: string;
}

export const InputSearch = () => {
  const { setWordSearch, products, setFilteredProducts } =
    useContext(ProductsContext);

  const { register, handleSubmit, reset } = useForm<iOnSubmit>({});

  const findProduct = (data: iOnSubmit) => {
    const search = data.search.toLowerCase();

    const filteredList = products.filter((item) => {
      return (
        item.category.toLowerCase().includes(search) ||
        item.name.toLowerCase().includes(search)
      );
    });

    if (filteredList.length > 0) {
      setFilteredProducts(filteredList);
      setWordSearch(search);
      filteredList.length == 1
        ? toast.success("1 produto encontrado!")
        : toast.success(`${filteredList.length} produtos encontrados!`);
    } else {
      setFilteredProducts([]);
      setWordSearch("");
      toast.error(`Nenhum produto encontrado com "${search}" !`);
    }

    reset({
      search: "",
    });
  };

  const hideResults = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setWordSearch("");
      setFilteredProducts([]);
    }
  };

  return (
    <StyledInputSearch onSubmit={handleSubmit(findProduct)}>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        {...register("search")}
        required
      />
      <Button size="medium" color="primary" content={<ImSearch size={18} />} />
    </StyledInputSearch>
  );
};
