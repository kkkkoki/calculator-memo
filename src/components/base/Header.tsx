import { FC } from 'react';
import Link from 'next/link';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';
import { VariantProps, tv } from 'tailwind-variants';
import ThemeToggleButton from '../ThemeToggleButton';

const header = tv({
  slots: {
    root: 'flex items-center justify-between h-16',
    logo: 'text-xl font-bold',
    actions: 'flex items-center gap-2',
    directionBtn:
      'w-9 h-9 rotate-0 transition-all duration-300 hover:scale-110',
  },
  variants: {
    directionBtn: {
      true: {
        directionBtn: 'rotate-180',
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
          <ArrowsRightLeftIcon />
        </button>
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
