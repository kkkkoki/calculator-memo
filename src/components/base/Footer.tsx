import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const startYear = 2023;
  const year = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="flex items-center justify-center space-y-4 flex-col">
      <h2 className="text-base font-semibold">CLMEMO</h2>
      <div className="flex items-center space-x-4">
        <a className="block" href="https://github.com/kkkkoki" target="_blank">
          <Image
            className="w-[40px] h-auto"
            src={`${isDark ? 'github-white' : 'github'}.svg`}
            alt="GitHub"
            width="0"
            height="0"
            priority
          />
        </a>
        <a
          className="flex items-center"
          href="https://twitter.com/tonamaru4"
          target="_blank"
        >
          <Image
            className="w-[40px] h-auto"
            src={`${isDark ? 'twitter-white' : 'twitter'}.svg`}
            alt="Twitter"
            width="0"
            height="0"
            priority
          />
        </a>
      </div>
      <span className="text-sm opacity-40 pb-4">
        &copy; {startYear !== year && `${startYear} - `}
        {year} kkkkoki. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
