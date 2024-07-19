"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

const Header = () => {
  const currentPath = usePathname();
  return (
    <header>
      <div className="py-6 flex justify-between border-b border-border">
        <div className="max-w-[236px]">
          <a href="/">
            <Image
              src="/assets/images/logo.png"
              width={1000}
              height={1000}
              alt="Logo"
            />
          </a>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                    className={cn("font-bold duration-300 transition-al",
                        {
                            "nav-active": currentPath === '/',
                            "hover:text-primary": currentPath !== '/',
                        }
                    )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn("font-bold duration-300 transition-al",
                    {
                        "nav-active": currentPath === '/about',
                        "hover:text-primary": currentPath !== '/about',
                    }
                  )}
                >
                  About us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/events" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn("font-bold duration-300 transition-al",
                    {
                        "nav-active": currentPath === '/events',
                        "hover:text-primary": currentPath !== '/events',
                    }
                  )}
                >
                  Upcoming Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn("font-bold duration-300 transition-al",
                    {
                        "nav-active": currentPath === '/contact',
                        "hover:text-primary": currentPath !== '/contact',
                    }
                  )}
                >
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
