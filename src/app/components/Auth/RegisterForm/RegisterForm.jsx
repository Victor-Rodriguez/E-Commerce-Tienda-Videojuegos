"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Auth } from "@/api";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { formSchema, initialValues } from "./RegisterForm.form";
import { useRouter } from "next/navigation";

const authController = new Auth();

export function RegisterForm() {
  const router = useRouter();

  //Hook de formulario
  //Se utiliza la librería react-hook-form para manejar el estado del formulario y la validación
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (values) => {
    try {
      await authController.register(values);
      router.push("/auth/sign-in/");
      // Aquí puedes manejar la respuesta después de un registro exitoso
    } catch (error) {
      console.error("Error en el registro:", error);
      // Aquí puedes manejar el error de registro
    }
  };

  return (
    <Form {...form}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-2xl/9 font-bold font-custom-title2">
            Crea tu cuenta
          </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 font-custom-body2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input placeholder="tuemail@ejemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              conntrol={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm/6 font-medium">
                    Nombre de Usuario
                  </FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Tu usuario" {...field} />
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
                Registrarse
              </Button>
            </div>
            <div className="mt-10 text-center text-sm/6">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/auth/sign-in/">
                <Button variant="link" className="hover:text-amber-600">
                  Inicia sesión
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Form>
  );
}
