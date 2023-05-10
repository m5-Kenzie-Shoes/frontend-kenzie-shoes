import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, loginUser, updateDataUser } from "../services/users";
import * as i from "../interfaces/UserInterfaces";

export const UserContext = createContext({} as i.UserContext);

export const UserProvider = ({ children }: i.UserProvider) => {
  const navigate = useNavigate();
  const [loadUser, setLoadUser] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [reloadRender, setReloadRender] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState<i.userResponse | null>(null);

  const loginSubmit = async (data: i.DataLogin) => {
    const response = await loginUser(data);

    if (response) {
      localStorage.setItem("@TOKEN", response.access);

      const parseUser = JSON.parse(
        atob(response.access!.split(".")[1])
      ).user_id;
      localStorage.setItem("@USER_ID", parseUser);
      setUserId(parseUser);
      setReloadRender(!reloadRender);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      localStorage.clear();
    }
  };

  const registerSubmit = async (data: i.DataRegister) => {
    const response = await createUser(data);

    response && navigate("/login");
  };

  const UserUpdateSubmit = async (data: i.UpdateDataUser) => {
    let filteredData: any = {};
    let filteredAddress: any = {};
    let address: any = data.address;
    let newData = delete data.address;

    const keysAddress = Object.entries(address!);
    keysAddress.map((key) => {
      if (key[1] != "") {
        const propriedade = key[0];
        const valor = key[1];
        filteredAddress[propriedade] = valor;
      }
    });

    const keysData = Object.entries(newData);
    keysData.map((key) => {
      if (key[1] != "") {
        const propriedade = key[0];
        const valor = key[1];
        filteredData[propriedade] = valor;
      }
    });

    filteredData.address = filteredAddress;
    console.log(filteredData);

    const response = await updateDataUser(data, userId!);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userId,
        reloadRender,
        setReloadRender,
        loadUser,
        setLoadUser,
        loginSubmit,
        registerSubmit,
        UserUpdateSubmit,
        logout,
        showPass,
        setShowPass,
        showProfileModal,
        setShowProfileModal,
        closeModal,
        setCloseModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
