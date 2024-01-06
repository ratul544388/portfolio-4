import { usePathname } from "next/navigation";

export const useRoutes = () => {
  const pathname = usePathname();
  const routes = [
    {
      label: "Home",
      emoji: "🏡",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Projects",
      emoji: "🛠️",
      href: "/projects",
      active: pathname.includes("projects"),
    },
    {
      label: "Contact",
      emoji: "📞",
      href: "/contact",
      active: pathname.includes("contact"),
    },
  ];

  return routes;
};
