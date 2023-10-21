import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import BaseLayout from "../components/layout/baseLayout";
import Dashboard from "../pages/dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<BaseLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
