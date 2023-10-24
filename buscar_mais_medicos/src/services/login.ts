import { isAxiosError } from "axios";
import api from "./config";
import { toast } from "react-toastify";

export async function LoginAccess({ email, password }: LoginParams) {
  try {
    const responseLogin = await api.post(
      "login",
      {},
      {
        params: {
          email,
          password,
        },
      }
    );

    if (responseLogin.data.message === "Successfully login") {
      const token = responseLogin.data.token;
      localStorage.setItem("token", token);
      return true;
    }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 401) {
        toast("Senha incorreta");
      }
      if (error.response?.status === 404) {
        toast("Usuário não encontrado");
      }
    }
    toast("Ocorreu um erro em nossos servidores, tente novamente mais tarde");
  }
}
