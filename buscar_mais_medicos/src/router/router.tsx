import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import BaseLayout from "../components/layout/baseLayout";
import Dashboard from "../pages/dashboard/dashboard";
import Users from "../pages/users";
import Plans from "../pages/plans";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="_/" element={<BaseLayout />}>
          <Route path="dashboard" index element={<Dashboard />} />
          <Route path="users" index element={<Users />} />
          <Route path="plans" index element={<Plans />} />
          <Route path="specialties" index element={<></>} />
          <Route path="notification" index element={<></>} />
          <Route path="faq" index element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
