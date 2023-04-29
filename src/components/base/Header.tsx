import { FC } from 'react';
import Link from 'next/link';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';
import ThemeToggleButton from '../ThemeToggleButton';

type HeaderProps = {
  direction: string | null;
  setDirection: VoidFunction;
};

const Header: FC<HeaderProps> = ({ direction, setDirection }) => {
  return (
    <header className="flex items-center justify-between h-16">
      <Link href="/">
        <h1 className="text-xl font-bold">CLMEMO</h1>
      </Link>
      <div className="flex items-center gap-2">
        <button
          className={`w-9 h-9 ${
            direction === 'LTR' && 'rotate-180'
          } transition-all duration-300 hover:scale-110`}
          onClick={setDirection}
        >
          <ArrowsRightLeftIcon />
        </button>
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
