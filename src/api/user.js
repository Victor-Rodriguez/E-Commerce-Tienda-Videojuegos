import { ENV, authFetch } from "@/utils";

export class User {
  async getMe() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;

      const response = await authFetch(url);
      const result = await response.json();

      if (!response.ok) throw result;

      return result;
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      throw error;
    }
  }
}
