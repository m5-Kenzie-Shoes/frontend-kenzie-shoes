import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, loginUser } from "../services/api";
import * as i from "../interfaces/UserInterfaces";

export const UserContext = createContext({} as i.UserContext);

export const UserProvider = ({ children }: i.UserProvider) => {
  const navigate = useNavigate();
  const [loadUser, setLoadUser] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [reloadRender, setReloadRender] = useState(false);

  const loginSubmit = async (data: i.DataLogin) => {
    const response = await loginUser(data);
    const { access } = response;

    if (response) {
      localStorage.setItem("@TOKEN", access);
      setReloadRender(!reloadRender);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      localStorage.clear();
    }
  };

  const registerSubmit = async (data: i.DataRegister) => {
    const response = await createUser(data);

    response && navigate("/login");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        reloadRender,
        setReloadRender,
        loadUser,
        setLoadUser,
        loginSubmit,
        registerSubmit,
        logout,
        showPass,
        setShowPass,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
