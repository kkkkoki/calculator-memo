import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { siteConfig } from '@/_seo/siteConfig';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <DefaultSeo
        title={undefined}
        defaultTitle={siteConfig.siteName}
        description={siteConfig.description}
        titleTemplate={`%s - Calculator Memo`}
        twitter={{
          cardType: 'summary_large_image',
          handle: `@${siteConfig.author}`,
          site: `@${siteConfig.siteName}`,
        }}
        openGraph={{
          type: 'website',
          title: siteConfig.siteName,
          locale: 'ja_JP',
          siteName: siteConfig.siteName,
          images: [
            {
              url: `${siteConfig.origin}/seo/ogp.png`,
              alt: 'CLMEMO',
            },
            {
              url: `${siteConfig.origin}/seo/ogp-2.png`,
              width: 800,
              height: 600,
              alt: 'CLMEMO',
            },
          ],
        }}
      />
      <ThemeProvider attribute="class">
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
