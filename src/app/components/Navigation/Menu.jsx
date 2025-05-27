import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Menu() {
  return (
    <div className="w-full bg-background-secondary text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo-gameshop-icon.png"
          alt="Logo"
          width={48}
          height={48}
          priority
        />
        <span className="ml-2 text-xl font-custom-title2">GameShop</span>
      </Link>

      {/* Opciones de menú */}
      <NavigationMenu className="font-custom-body2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/#" legacyBehavior passHref>
              <NavigationMenuLink>PlayStation</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#" legacyBehavior passHref>
              <NavigationMenuLink>XBOX</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#" legacyBehavior passHref>
              <NavigationMenuLink>Nintendo</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#" legacyBehavior passHref>
              <NavigationMenuLink>PC</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
