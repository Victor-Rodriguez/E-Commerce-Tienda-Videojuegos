"use client";
import { useAuth } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthLayout = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true); // Estado para verificar la autenticación

  //Si el usuario ya está autenticado, redirigir a la página de inicio
  //Se ejecuta cuando el componente se monta o cuando cambia el valor de user
  useEffect(() => {
    if (user) {
      router.replace("/"); // Redirigir a la página de inicio
    } else {
      setCheckingAuth(false); // Si no hay usuario, cambiar el estado de verificación
    }
  }, [user, router]);

  if (checkingAuth) return null; // Mostrar nada mientras se verifica la autenticación

  return (
    <div className="flex flex-col min-h-screen">
      {/* <div className="p-4 text-center bg-background-secondary">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div> */}
      <div className="flex flex-col flex-1 sm:flex-row">
        <div className="flex items-center justify-center w-full p-4 sm:w-1/2">
          <div className="w-full p-4">{children}</div>
        </div>
        <div className="relative items-center justify-center hidden sm:flex sm:w-1/2">
          <Image
            src="/images/sign-wallpaper.jpg"
            alt="Auth Image"
            fill
            className="object-cover object-center"
            sizes="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
