import { useEffect, useState } from 'react';
import { Around } from '@theme-toggles/react';
import '@theme-toggles/react/css/Around.css';
import { useTheme } from 'next-themes';

const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Around
      onToggle={() => setTheme(isDark ? 'light' : 'dark')}
      toggled={isDark}
      className="text-[40px]"
      duration={750}
    />
  );
};

export default ThemeToggleButton;
