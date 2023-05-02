import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import { ToastConfig } from "./components/ToastConfig";
import { Providers } from "./context/Providers";

export const App = () => {
  return (
    <BrowserRouter>
      <ToastConfig />
      <Providers>
        <PageRoutes />
      </Providers>
    </BrowserRouter>
  );
};
