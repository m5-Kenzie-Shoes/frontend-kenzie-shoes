import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, loginUser } from "../services/users";
import * as i from "../interfaces/UserInterfaces";

export const UserContext = createContext({} as i.UserContext);

export const UserProvider = ({ children }: i.UserProvider) => {
  const navigate = useNavigate();
  const [loadUser, setLoadUser] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [reloadRender, setReloadRender] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);

  const loginSubmit = async (data: i.DataLogin) => {
    const response = await loginUser(data);

    if (response) {
      localStorage.setItem("@TOKEN", response.access);

      const user_id = JSON.parse(atob(response.access!.split(".")[1])).user_id;
      localStorage.setItem("@USER_ID", user_id);

      setReloadRender(!reloadRender);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      localStorage.clear();
    }
  };

  const registerSubmit = async (data: i.DataRegister) => {
    const response = await createUser(data);

    response && navigate("/login");
  };

  const UserUpdateSubmit = async (data: i.DataRegister) => {
    console.log(data);
    const response = await createUser(data);

    response && navigate("/dashboard");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
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
