import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";

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
    <Around
      onToggle={() => setTheme(isDark ? "light" : "dark")}
      toggled={isDark}
      className="text-5xl"
      duration={750}
    />
  );
};

export default ThemeToggleButton;
