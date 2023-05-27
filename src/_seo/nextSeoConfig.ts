import { Metadata } from "next";

import { siteConfig } from "./siteConfig";

const config: Metadata = {
  title: siteConfig.siteName,
  description: siteConfig.description,
  authors: { name: siteConfig.author, url: siteConfig.github },
  creator: siteConfig.author,
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.origin}/seo/ogp.png`,
      },
    ],
    locale: "ja-JP",
    type: "website",
  },
  twitter: {
    site: `@${siteConfig.siteName}`,
    card: "summary_large_image",
    creator: `@${siteConfig.author}`,
  },
  icons: {
    icon: process.env.NODE_ENV === "development" ? "/favicon/favicon-dev.ico" : "favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  themeColor: "#fefefe",
};

export default config;
