import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const SOCIAL_LINKS = [
  {
    alt: 'GitHub',
    src: 'github',
    url: 'https://github.com/kkkkoki',
  },
  {
    alt: 'Twitter',
    src: 'twitter',
    url: 'https://twitter.com/tonamaru4',
  },
];

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
        {mounted ? (
          SOCIAL_LINKS.map((social) => (
            <React.Fragment key={social.alt}>
              <a
                className="flex items-center"
                href={social.url}
                target="_blank"
              >
                <Image
                  className="w-[40px] h-auto"
                  src={`${isDark ? social.src + '-white' : social.src}.svg`}
                  alt="GitHub"
                  width="0"
                  height="0"
                  priority
                />
              </a>
            </React.Fragment>
          ))
        ) : (
          <div className="w-10 h-10"></div>
        )}
      </div>
      <span className="text-sm opacity-40 pb-4">
        &copy; {startYear !== year && `${startYear} - `}
        {year} kkkkoki. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
