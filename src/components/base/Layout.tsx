import { ReactNode, useEffect, useState } from 'react';
import { tv } from 'tailwind-variants';
import Footer from './Footer';
import Header from './Header';
import { LayoutDirectionType } from '@/types/layoutDirection';

const layout = tv({
  slots: {
    root: 'container flex flex-col min-h-screen',
    flex: 'flex flex-1 items-center flex-row',
    contents: 'flex items-center my-16 flex-1',
    dummy: 'w-40 text-center',
  },
  variants: {
    flex: {
      true: {
        flex: 'flex-row-reverse',
      },
    },
  },
});

const Layout = ({ children }: { children: ReactNode }) => {
  const [direction, setDirection] = useState<LayoutDirectionType | null>(null);
  const [isRendered, setIsRendered] = useState(false);
  const isLTR = direction === 'LTR';
  const { root, flex, contents, dummy } = layout({ flex: isLTR });

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
    <div className={root()}>
      <Header
        setDirection={() => setDirection(isLTR ? 'RTL' : 'LTR')}
        headerVariants={{ directionBtn: direction === 'LTR' && true }}
      />
      <div className={flex()}>
        {/* <div className={dummy()}>
          <p>hello world</p>
        </div> */}
        <main className={contents()}>{children}</main>
        {/* <span className={dummy()}></span> */}
      </div>
      <Footer />
    </div>
  ) : (
    <></>
  );
};

export default Layout;
