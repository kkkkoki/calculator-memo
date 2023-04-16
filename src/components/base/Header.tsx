import React from 'react';
import Link from 'next/link';
import ThemeToggleButton from '../ThemeToggleButton';

const Header = () => {
  return (
    <header className="flex items-center justify-between h-16">
      <Link className="" href="/">
        <h1 className="text-xl font-bold">CLMEMO</h1>
      </Link>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;
