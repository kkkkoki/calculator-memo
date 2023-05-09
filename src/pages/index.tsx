import { ReactElement } from 'react';
// import { NextPageWithLayout } from './_app';
import Layout from '@/components/base/Layout';
import CalculatorBody from '@/components/calculator/CalculatorBody';

const IndexPage = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <CalculatorBody />
      </div>
    </>
  );
};

// IndexPage.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };

export default IndexPage;
