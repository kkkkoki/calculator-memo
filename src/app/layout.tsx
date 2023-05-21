import { Metadata } from "next";

import config from "@/_seo/nextSeoConfig";

import Providers from "../components/providers";

export const metadata: Metadata = {
  ...config,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
