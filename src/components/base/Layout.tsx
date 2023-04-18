import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container flex flex-col min-h-screen">
      <Header />
      <main className="flex items-center my-16 flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
