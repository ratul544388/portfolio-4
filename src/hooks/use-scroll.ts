import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const maxScroll = documentHeight - windowHeight;
      const scrolled = (scrollPos / maxScroll) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPercentage]);

  return { scrollPercentage };
};
