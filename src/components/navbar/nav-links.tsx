"use client";

import { useRoutes } from "@/hooks/use-routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

export const NavLinks = () => {
  const routes = useRoutes();

  return (
    <nav className="flex gap-5">
      {routes.map((route) => (
        <Link
          key={route.label}
          href={route.href}
          className={cn(
            "relative flex flex-col font-medium text-muted-foreground",
            route.active && "text-foreground"
          )}
        >
          {route.label}
          {route.active && (
            <motion.span
              layoutId="activeNavLink"
              className="w-full h-[3.5px] bg-theme rounded-full absolute -bottom-0.5"
            />
          )}
        </Link>
      ))}
    </nav>
  );
};
