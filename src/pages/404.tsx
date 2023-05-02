import { FC } from 'react';
import { NotFound } from '@/_pages/404';

const CustomErrorPage: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <NotFound />
    </div>
  );
};

export default CustomErrorPage;
