import { ReactElement } from "react";

import Layout from "@/components/base/Layout";
import CalculatorBody from "@/components/calculator/CalculatorBody";

import { NextPageWithLayout } from "./_app";

const IndexPage: NextPageWithLayout = () => {
  return <CalculatorBody />;
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
