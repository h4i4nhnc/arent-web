import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import './styles.scss';
import { Header } from 'app//components/Header/Loadable';
import { Footer } from 'app/components/Footer/Loadable';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <div className="home">My HomePage</div>
      <Footer />
    </>
  );
}
