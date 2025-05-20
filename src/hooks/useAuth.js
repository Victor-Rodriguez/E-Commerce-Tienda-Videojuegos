import { AuthContext } from "@/contexts";
import { useContext } from "react";

//Este hook permite acceder al contexto de autenticación en cualquier parte de la aplicación
// sin necesidad de envolver cada componente con el AuthContext.Consumer.
export const useAuth = () => useContext(AuthContext);
