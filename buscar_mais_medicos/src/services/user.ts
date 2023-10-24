import { isAxiosError } from "axios";
import api from "./config";
import { toast } from "react-toastify";

export async function GetLoginAcess() {
  try {
    const tokenAuthorization = localStorage.getItem("token");
    const response = await api.get("user", {
      headers: {
        Authorization: `Bearer ${tokenAuthorization}`,
      },
      params: {
        page: 0,
        size: 4,
        sort: "desc",
      },
    });

    return response.data;
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
