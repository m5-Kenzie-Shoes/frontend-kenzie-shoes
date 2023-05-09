export interface UserProvider {
  children: React.ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserContext {
  // user_id: number | null;
  reloadRender: boolean;
  setReloadRender: React.Dispatch<React.SetStateAction<boolean>>;
  loadUser: boolean;
  setLoadUser: React.Dispatch<React.SetStateAction<boolean>>;
  loginSubmit: (data: DataLogin) => void;
  registerSubmit: (data: DataRegister) => void;
  logout: () => void;
  showPass: boolean;
  setShowPass: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DataLogin {
  username: string;
  password: string;
}

interface DataAddress {
  street: string;
  number: number;
  add_on?: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface DataRegister {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  rePassword?: string;
  img: string;
  address: DataAddress;
}
