/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage, RecordPage, ChallengePage } from './pages/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}
