import { Head, Html, Main, NextScript } from "next/document";

import Favicon from "@/_seo/Favicon";

export default function Document() {
  return (
    <Html lang="ja" prefix="og:http://ogp.me/ns#">
      <Head>
        <Favicon />
      </Head>
      <body className="bg-brown-4 dark:bg-sand-1 text-brown-12">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
