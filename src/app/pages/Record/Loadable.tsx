/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const RecordPage = lazyLoad(
  () => import('./index'),
  module => module.RecordPage,
);
