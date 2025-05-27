export function Footer() {
  return (
    <div>
      <footer className="bg-background-secondary text-white p-4 text-center">
        <p className="text-sm font-custom-body2">
          © {new Date().getFullYear()} GameShop. Todos los derechos reservados.
        </p>
        <p className="text-xs font-custom-body2 mt-2">
          Desarrollado por{" "}
          <span className="text-amber-600">Víctor Rodríguez</span>
        </p>
      </footer>
    </div>
  );
}
