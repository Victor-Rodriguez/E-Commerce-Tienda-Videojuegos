import { z } from "zod";

//Esquema de validación con Zod
export const formSchema = z.object({
  identifier: z
    .string()
    .min(1, "Verifica el correo/nombre de usuario e intenta nuevamente."),
  password: z.string().min(1, "La contraseña ingresada es incorrecta."),
});

//Valores iniciales del formulario
export const initialValues = {
  identifier: "",
  password: "",
};
