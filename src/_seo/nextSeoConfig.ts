import { DefaultSeoProps } from 'next-seo';
import { siteConfig } from './siteConfig';

const config: DefaultSeoProps = {
  title: undefined,
  titleTemplate: `%s | ${siteConfig.siteName}`,
  defaultTitle: siteConfig.siteName,
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: siteConfig.siteName,
    url: siteConfig.origin,
    images: [
      {
        url: `${siteConfig.origin}/seo/ogp.png`,
      },
    ],
  },
  twitter: {
    handle: `@${siteConfig.author}`,
    site: `@${siteConfig.siteName}`,
    cardType: 'summary_large_image',
  },
};

export default config;
