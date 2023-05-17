import { useEffect, useState } from "react";

import { Around } from "@theme-toggles/react";

import "@theme-toggles/react/css/Around.css";
import { useTheme } from "next-themes";
import { tv } from "tailwind-variants";

const button = tv({
  base: "text-[40px] hover:-rotate-[30deg] dark:hover:-rotate-12 transition-all duration-300",
});

const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Around onToggle={() => setTheme(isDark ? "light" : "dark")} toggled={isDark} className={button()} duration={750} />
  );
};

export default ThemeToggleButton;
