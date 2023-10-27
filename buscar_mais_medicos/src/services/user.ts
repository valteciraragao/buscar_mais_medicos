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

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      toast("Ocorreu um erro em nossos servidores, tente novamente mais tarde");
    }
  }
}

export async function GetAllUsers(page: number) {
  try {
    const token = localStorage.getItem("token");
    const replyAllUsers: AxiosResponse<UserApi & Pagination> = await api.get(
      "users",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page,
          size: 6,
        },
      }
    );
    return replyAllUsers.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 403) {
        throw new Error(
          "Ocorreu um erro em nossos servidores, tente novamente mais tarde"
        );
      }
    }
  }
}

export async function GetCountAllUser() {
  try {
    const token = localStorage.getItem("token");
    const resultCountAllUser: AxiosResponse<CountUser> = await api.get(
      "users/count ",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return resultCountAllUser.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 403) {
        throw new Error(
          "Ocorreu um erro em nossos servidores, tente novamente mais tarde"
        );
      }
    }
  }
}
