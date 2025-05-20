"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Auth } from "@/api";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formSchema, initialValues } from "./LoginForm.form";
import { useAuth } from "@/hooks";

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const authController = new Auth();

  // Configurar react-hook-form con zod y valores iniciales
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (data) => {
    try {
      const response = await authController.login(data);
      // Aquí puedes manejar la respuesta después de un inicio de sesión exitoso
      login(response.jwt);
      //router.push("/");
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
    }
    console.log("Datos del formulario:", data);
  };

  return (
    <Form {...form}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-2xl/9 font-bold font-custom-title2">
            Inicia sesión en tu cuenta
          </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 font-custom-body2"
          >
            <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico o Nombre de Usuario</FormLabel>
                  <FormControl>
                    <Input placeholder="tuemail@ejemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              conntrol={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm/6 font-medium">
                    Contraseña
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Contraseña"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Button type="submit" className="flex w-full">
                Iniciar sesión
              </Button>
            </div>
            <div className="mt-10 text-center text-sm/6">
              ¿No tienes una cuenta?{" "}
              <Link href="/auth/sign-up/">
                <Button variant="link" className="hover:text-amber-600">
                  Registrate
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Form>
  );
}
