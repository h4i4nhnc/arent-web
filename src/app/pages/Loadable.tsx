/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const HomePage = lazyLoad(
  () => import('./Home/index'),
  module => module.HomePage,
);

export const RecordPage = lazyLoad(
  () => import('./Record/index'),
  module => module.RecordPage,
);

export const ArticlePage = lazyLoad(
  () => import('./Article/index'),
  module => module.ArticlePage,
);
