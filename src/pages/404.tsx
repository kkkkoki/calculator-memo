import { FC } from 'react';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

const notFound = tv({
  slots: {
    root: 'flex items-center justify-center h-screen py-6 sm:py-8 lg:py-12',
    flex: 'flex flex-col items-center',
    logo: 'text-black-800 mb-8 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl',
    accent:
      'mb-4 text-sm font-semibold uppercase text-orange-400 dark:text-orange-600 md:text-base',
    title: 'mb-2 text-center text-2xl font-bold md:text-3xl',
    subTitle: 'mb-12 max-w-screen-md text-center opacity-70 md:text-lg',
    home: 'inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold outline-none focus-visible:ring md:text-base',
  },
});

const NotFound: FC = () => {
  const { root, flex, logo, accent, title, subTitle, home } = notFound();
  return (
    <div className={root()}>
      <div className={flex()}>
        <Link href="/" className={logo()} aria-label="logo">
          <span>🧮</span>
          <span>CLMEMO</span>
        </Link>

        <p className={accent()}>That’s a 404</p>
        <h1 className={title()}>Page not found</h1>

        <p className={subTitle()}>存在しないページです</p>

        <Link href="/" className={home()}>
          ホーム
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
