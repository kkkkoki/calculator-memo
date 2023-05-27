import { Metadata } from "next";

import "@/styles/globals.css";
import config from "@/config/nextSeoConfig";

import Layout from "@/components/base/Layout";

import Providers from "../components/providers";

export const metadata: Metadata = {
  ...config,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <body className="bg-brown-4 dark:bg-sand-1 text-brown-12">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
