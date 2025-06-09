/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const Header = lazyLoad(
  () => import('./index'),
  module => module.Header,
);

export const SubMenu = lazyLoad(
  () => import('./SubMenu/index'),
  module => module.SubMenu,
);
