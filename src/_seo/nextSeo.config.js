import { siteConfig } from './siteConfig';

export default SEO = {
  titleTemplate: `%s | ${siteConfig.siteName}`,
  defaultTitle: 'タイトル',
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: siteConfig.author,
    },
    {
      name: 'application-name',
      content: 'サイト名',
    },
  ],
  openGraph: {
    url: 'https://hogehoge.com/',
    type: 'website',
    locale: 'ja_JP',
    site_name: 'サイト名',
  },
  twitter: {
    handle: '@hogehoge',
    site: '@fugafuga',
    cardType: 'summary_large_image',
  },
};
