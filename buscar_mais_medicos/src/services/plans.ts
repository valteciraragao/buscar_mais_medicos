import { AxiosResponse, isAxiosError } from "axios";
import api from "./config";

export async function GetAllPlans(page: number) {
  try {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<PlansApi & Pagination> = await api.get(
      "plans",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page,
          size: 10,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 403) {
        throw new Error("Usuário não autenticado, favor realizar Login!");
      }
    }
  }
}
