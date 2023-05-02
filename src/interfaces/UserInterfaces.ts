export interface UserProvider {
  children: React.ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserInfo {
  accessToken: string;
  user: User;
}

export interface UserContext {
  userInfo: null | UserInfo;
  loadUser: boolean;
  setLoadUser: React.Dispatch<React.SetStateAction<boolean>>;
  loginSubmit: (data: DataLogin) => void;
  registerSubmit: (data: DataRegister) => void;
  logout: () => void;
  showPass: boolean;
  setShowPass: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DataLogin {
  email: string;
  password: string;
}

export interface DataRegister {
  email: string;
  name: string;
  password: string;
  rePassword?: string;
}
