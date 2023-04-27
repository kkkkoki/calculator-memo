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
      <ThemeToggleButton />
      <button onClick={setDirection}>
        <ArrowsRightLeftIcon
          className={`w-6 h-6 ${
            direction === 'LTR' && 'rotate-180'
          } transition-all duration-300`}
        />
      </button>
    </header>
  );
};

export default Header;
