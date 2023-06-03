import React, { FC } from "react";
import Image from "next/image";

import { useTheme } from "next-themes";
import { tv } from "tailwind-variants";

const footer = tv({
  slots: {
    root: "flex items-center justify-center space-y-4 flex-col mt-8",
    logo: "text-base font-semibold",
    links: "flex items-center space-x-4",
    sosialLink: "flex items-center",
    sosialImage: "w-10 h-auto",
    copyLight: "text-sm opacity-70 pb-4",
  },
});

const SOCIAL_LINKS = [
  {
    alt: "GitHub",
    src: "github",
    url: "https://github.com/kkkkoki",
  },
  {
    alt: "Twitter",
    src: "twitter",
    url: "https://twitter.com/tonamaru4",
  },
];

const Footer: FC = () => {
  const { root, logo, links, sosialLink, sosialImage, copyLight } = footer();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const startYear = 2023;
  const year = new Date().getFullYear();

  return (
    <footer className={root()}>
      <h2 className={logo()}>CLMEMO</h2>
      <div className={links()}>
        {SOCIAL_LINKS.map((social) => (
          <React.Fragment key={social.alt}>
            <a className={sosialLink()} href={social.url} target="_blank">
              <Image
                className={sosialImage()}
                src={`social/${isDark ? social.src + "-white" : social.src}.svg`}
                alt="GitHub"
                width="0"
                height="0"
                priority
              />
            </a>
          </React.Fragment>
        ))}
      </div>
      <span className={copyLight()}>
        &copy; {startYear !== year && `${startYear} - `}
        {year} kkkkoki. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
