import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import './styles.scss';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="home">My HomePage</div>
    </>
  );
}
