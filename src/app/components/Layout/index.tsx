import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This renders the matched child route */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
