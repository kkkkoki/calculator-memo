import { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/base/Layout';
import CalculatorBody from '@/components/calculator/CalculatorBody';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Calculator Memo</title>
        <meta charSet="utf-8" />
        <meta name="description" content="計算機&メモ。計算をより便利に！" />
        <link
          rel="icon"
          href="https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f9ee.svg"
        />
      </Head>

      <div className="flex items-center justify-center w-full h-full">
        <CalculatorBody />
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
