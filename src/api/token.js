import { ENV } from "@/utils";
import { jwtDecode } from "jwt-decode";

//Guarda el token en el localStorage
//El token se utiliza para autenticar las peticiones a la API
export class Token {
  //Guarda el token en el localStorage
  setToken(token) {
    localStorage.setItem(ENV.TOKEN, token);
  }

  //Obtiene el token del localStorage
  getToken() {
    return localStorage.getItem(ENV.TOKEN);
  }

  //Elimina el token del localStorage
  removeToken() {
    localStorage.removeItem(ENV.TOKEN);
  }

  //Token expirado
  isExpired(token) {
    const decodedToken = jwtDecode(token);
    const expirationDate = decodedToken.exp * 1000; // Convertir a milisegundos
    const currentDate = new Date().getTime(); // Obtener la fecha actual en milisegundos

    if (currentDate > expirationDate) {
      return true; // El token ha expirado
    }
    return false; // El token es válido
  }
}
