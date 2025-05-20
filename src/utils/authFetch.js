import { Token } from "@/api";

export async function authFetch(url, params) {
  const tokenController = new Token();
  const token = tokenController.getToken();

  const logout = () => {
    tokenController.removeToken();
    window.location.replace("/");
  };

  // Si no hay token, redirigir a la página de inicio de sesión
  // Si el token ha expirado, redirigir a la página de inicio de sesión
  if (!token) {
    logout();
  } else {
    if (tokenController.isExpired(token)) {
      logout();
    } else {
      const paramsTemps = {
        ...params,
        headers: {
          ...params?.headers, //Añadir los headers que ya existen
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        return await fetch(url, paramsTemps);
      } catch (error) {
        return error;
      }
    }
  }
}
