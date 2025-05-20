import { z } from "zod";

//Esquema de validación con Zod
export const formSchema = z.object({
  email: z.string().email({ message: "Ingresa un correo electrónico válido." }),
  username: z
    .string()
    .min(5, { message: "Tu usuario debe tener al menos 5 caracteres." }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres." }),
});

//Valores iniciales del formulario
export const initialValues = {
  email: "",
  username: "",
  password: "",
};
