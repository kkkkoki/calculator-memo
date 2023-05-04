import { Head, Html, Main, NextScript } from 'next/document';
import Favicon from '@/_seo/Favicon';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
