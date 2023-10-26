import { AxiosResponse, isAxiosError } from "axios";
import api from "./config";
import { toast } from "react-toastify";

export async function GetLoginAcess() {
  try {
    const tokenAuthorization = localStorage.getItem("token");
    const response: AxiosResponse<UserApi> = await api.get("users", {
      headers: {
        Authorization: `Bearer ${tokenAuthorization}`,
      },
      params: {
        page: 0,
        size: 4,
        sort: "desc",
      },
    });

    return response.data.content;
  } catch (error) {
    if (isAxiosError(error)) {
      toast("Ocorreu um erro em nossos servidores, tente novamente mais tarde");
    }
  }
}
