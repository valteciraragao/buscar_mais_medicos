import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import BaseLayout from "../components/layout/baseLayout";
import Dashboard from "../pages/dashboard/dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<BaseLayout />}>
          <Route path="dashboard" index element={<Dashboard />} />
          <Route path="users" index element={<></>} />
          <Route path="plans" index element={<></>} />
          <Route path="specialties" index element={<></>} />
          <Route path="notification" index element={<></>} />
          <Route path="faq" index element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
