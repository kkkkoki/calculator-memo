import React from 'react';

const Favicon = () => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon-dev.ico" />
    );
  }

  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="194x194"
        href="/favicon/favicon-194x194.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
};

export default Favicon;
