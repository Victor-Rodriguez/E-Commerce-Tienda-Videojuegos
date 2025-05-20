import { ENV } from "@/utils";

export class Auth {
  //Enpoint para el login
  async login(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, params);
      const result = await response.json();
      console.log("Resultado del login:", result);

      // Si la respuesta no es 200, lanza un error
      if (!response.ok) throw result;
      // Si la respuesta es 200, devuelve el resultado
      return result;
    } catch (error) {
      console.error("Error en el login:", error);
      throw error;
    }
  }

  //Enpoint para el registro
  async register(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, params);
      const resutl = await response.json();
      console.log("Resultado del registro:", resutl);

      // Si la respuesta no es 200, lanza un error
      if (!response.ok) throw resutl;
      // Si la respuesta es 200, devuelve el resultado
      return resutl;
    } catch (error) {
      console.error("Error en el registro:", error);
      throw error;
    }
  }
}
