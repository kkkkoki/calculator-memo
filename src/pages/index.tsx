import { ReactElement } from 'react';
import { Index } from '@/_pages/index';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/base/Layout';

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <Index />
      </div>
    </>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
