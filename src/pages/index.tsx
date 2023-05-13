import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/base/Layout';
import CalculatorBody from '@/components/calculator/CalculatorBody';

const IndexPage: NextPageWithLayout = () => {
  return <CalculatorBody />;
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
