import { AuthProvider } from "@/contexts";
import "@fontsource-variable/oxanium";
import "@fontsource-variable/orbitron";
import "@fontsource-variable/montserrat";
import "@fontsource/rajdhani";
import "./globals.css";

export const metadata = {
  title: "E-commerce App",
  description: "Ecormmerce App built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
