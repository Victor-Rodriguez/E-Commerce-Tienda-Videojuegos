import { AuthProvider } from "@/contexts";

//import "@fontsource-variable/oxanium";
import "@fontsource-variable/orbitron"; //Titulos
import "@fontsource-variable/montserrat"; //Cuerpo
//import "@fontsource/rajdhani";
import "./globals.css";
import { Menu } from "./components/Navigation/Menu";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "E-commerce App",
  description: "Ecormmerce App built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Menu />
        {/* Main content area */}
        <main className="flex-1 font-custom-body2">
          <AuthProvider>{children}</AuthProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
