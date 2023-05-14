import { FC } from 'react';
import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { VariantProps, tv } from 'tailwind-variants';
import ThemeToggleButton from '../ThemeToggleButton';

const header = tv({
  slots: {
    root: 'flex items-center justify-between h-16',
    logo: 'text-xl font-bold',
    actions: 'flex items-center gap-2',
    directionBtn: 'w-9 h-9 -scale-x-100 transition-all duration-300',
  },
  variants: {
    directionBtn: {
      true: {
        directionBtn: 'scale-x-100',
      },
    },
  },
});

type HeaderVariants = VariantProps<typeof header>;

type HeaderProps = {
  setDirection: VoidFunction;
  headerVariants: HeaderVariants;
};

const Header: FC<HeaderProps> = ({ setDirection, headerVariants }) => {
  const { root, logo, actions, directionBtn } = header({
    directionBtn: headerVariants.directionBtn,
  });
  return (
    <header className={root()}>
      <Link href="/">
        <h1 className={logo()}>CLMEMO</h1>
      </Link>
      <div className={actions()}>
        <button
          className={directionBtn()}
          onClick={setDirection}
          aria-label="レイアウトを変更する"
        >
          <ArrowUturnLeftIcon />
        </button>
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
