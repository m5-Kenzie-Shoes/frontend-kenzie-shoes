import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import { ToastConfig } from "./components/ToastConfig";
import { Providers } from "./context/Providers";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./components/modalChakra/style";

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ToastConfig />
        <Providers>
          <PageRoutes />
        </Providers>
      </ChakraProvider>
    </BrowserRouter>
  );
};
