import { ReactNode, useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { LayoutDirectionType } from '@/types/layoutDirection';

const Layout = ({ children }: { children: ReactNode }) => {
  const [direction, setDirection] = useState<LayoutDirectionType | null>(null);
  const [isRendered, setIsRendered] = useState(false);
  const isLTR = direction === 'LTR';

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    if (direction === null) {
      setDirection(JSON.parse(localStorage.getItem('directionState') + ''));
      return;
    }
    localStorage.setItem('directionState', JSON.stringify(direction));
  }, [direction]);

  return isRendered ? (
    <div className="container flex flex-col min-h-screen">
      <Header
        setDirection={() => setDirection(isLTR ? 'RTL' : 'LTR')}
        headerVariants={{ directionBtn: direction === 'LTR' && true }}
      />
      <div
        className={`flex flex-1 items-center ${
          isLTR ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        <div className={`w-40 text-center`}>
          <p>hello world</p>
        </div>
        <main className="flex items-center my-16 flex-1">{children}</main>
        <span className={`w-40`}></span>
      </div>
      <Footer />
    </div>
  ) : (
    <></>
  );
};

export default Layout;
