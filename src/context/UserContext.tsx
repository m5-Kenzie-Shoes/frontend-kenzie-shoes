import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, loginUser } from "../services/api";
import * as i from "../interfaces/UserInterfaces";

export const UserContext = createContext({} as i.UserContext);

export const UserProvider = ({ children }: i.UserProvider) => {
  const navigate = useNavigate();
  const [loadUser, setLoadUser] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [showPass, setShowPass] = useState(false);

  const loginSubmit = async (data: i.DataLogin) => {
    const response = await loginUser(data);
    const { user, accessToken } = response;

    if (response) {
      localStorage.setItem("@TOKEN", accessToken);
      localStorage.setItem("@USER", JSON.stringify(user));
      setUserInfo(user);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      localStorage.clear();
    }
  };

  const registerSubmit = async (data: i.DataRegister) => {
    console.log(data);
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    const response = await createUser(body);

    response && navigate("/login");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
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
