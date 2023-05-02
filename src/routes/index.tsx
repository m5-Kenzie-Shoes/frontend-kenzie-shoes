import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
