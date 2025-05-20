"use client";
import { useState, useEffect, createContext } from "react";
import { Token, User } from "@/api";

const tokenController = new Token();
const userController = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = tokenController.getToken(); // Obtener el token del localStorage
      if (!token) {
        logout(); // Si no hay token, cerrar sesión
        setLoading(false);
        return;
      }

      if (tokenController.isExpired(token)) {
        logout(); // Si el token ha expirado, cerrar sesión
      } else {
        await login(token); // Si el token es válido, iniciar sesión
      }
    })();
  }, []);

  // Función para cerrar sesión
  const logout = () => {
    tokenController.removeToken(); // Eliminar el token del localStorage
    setUser(null); // Limpiar los datos del usuario
    setToken(null); // Limpiar el token
  };

  // Función para actualizar los datos del usuario a nivel local
  const updateUser = async (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const login = async (token) => {
    try {
      tokenController.setToken(token); // Guardar el token en el localStorage
      const userData = await userController.getMe(); // Obtener los datos del usuario
      setUser(userData); // Guardar los datos del usuario en el estado
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setLoading(false);
    }
  };

  // Aquí puedes agregar la lógica de autenticación y el estado global
  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
