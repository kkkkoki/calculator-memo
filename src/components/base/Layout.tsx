import { ReactNode, useEffect, useState } from 'react';
import { tv } from 'tailwind-variants';
import Footer from './Footer';
import Header from './Header';

type LayoutDirectionType = 'RTL' | 'LTR';

const layout = tv({
  slots: {
    root: 'flex flex-col min-h-screen',
    container: 'container',
    flex: 'flex flex-1 items-center flex-row',
    contents: 'flex items-center justify-center my-16 flex-1',
    dummy: 'w-80 text-center',
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
  const { root, container, flex, contents, dummy } = layout({ flex: isLTR });

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
      <div className={container()}>
        <Header
          setDirection={() => setDirection(isLTR ? 'RTL' : 'LTR')}
          headerVariants={{ directionBtn: direction === 'LTR' && true }}
        />
      </div>

      <div className={flex()}>
        <div className={dummy()}>
          <p>hello world</p>
        </div>
        <main className={contents()}>{children}</main>
        <span className={dummy()}></span>
      </div>

      <div className={container()}>
        <Footer />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Layout;
