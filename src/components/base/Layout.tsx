import { ReactNode, useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { LayoutDirectionType } from '@/types/layoutDirection';

const Layout = ({ children }: { children: ReactNode }) => {
  const [direction, setDirection] = useState<LayoutDirectionType | null>(null);
  const [isRendered, setIsRendered] = useState(false);

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
        direction={direction}
        setDirection={() => setDirection(direction === 'LTR' ? 'RTL' : 'LTR')}
      />
      <div
        className={`flex flex-1 items-center ${
          direction === 'LTR' ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        <div className="w-40 text-center">
          <p>hello</p>
        </div>
        <main className="flex items-center my-16 flex-1">{children}</main>
        <div className="w-40 text-center">
          <p>world</p>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <></>
  );
};

export default Layout;
