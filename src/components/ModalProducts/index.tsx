import { StyledProfile } from "./style";
import { useContext } from "react";
import { AnimSlideDown } from "../../animation";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalSchema } from "../../components/Modals/modalSchema";
import * as i from "../../interfaces/ProductsInterfaces";
import { Input } from "../Input";
import { Button } from "../Button";
import { ProductsContext } from "../../context/ProductsContext";

export const ModalProducts = () => {
  const { showAddProducts, setShowAddProducts, ProductsSubmit } =
    useContext(ProductsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<i.Products>({
    mode: "onChange",
    resolver: yupResolver(ModalSchema),
  });

  return showAddProducts ? (
    <StyledProfile>
      <AnimSlideDown>
        <div className="divFormProfile">
          <div className="modalHeader">
            <h3>Cadastrar Produto</h3>
            <button
              className="buttonX"
              onClick={() => setShowAddProducts(false)}
            >
              X
            </button>
          </div>

          <form
            className="formProfile"
            onSubmit={handleSubmit(ProductsSubmit)}
            noValidate
          >
            <div>
              <div className="inputs">
                <div>
                  <Input
                    type="text"
                    name="Nome do produto"
                    register={register("name")}
                    error={errors.name?.message}
                  />
                  <Input
                    type="text"
                    name="Descrição"
                    register={register("description")}
                    error={errors.description?.message}
                  />
                  <Input
                    type="number"
                    name="Preço"
                    register={register("value")}
                    error={errors.value?.message}
                  />
                  <Input
                    type="text"
                    name="Categoria"
                    register={register("category")}
                    error={errors.category?.message}
                  />
                  <Input
                    type="number"
                    name="Estoque"
                    register={register("stock")}
                    error={errors.stock?.message}
                  />
                  <Input
                    type="url"
                    name="Imagem"
                    register={register("image_product")}
                    error={errors.image_product?.message}
                  />
                </div>
              </div>
            </div>
            <Button content="Vender Produto!" size="default" color="gray" />
          </form>
        </div>
      </AnimSlideDown>
    </StyledProfile>
  ) : (
    <></>
  );
};
