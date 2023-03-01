import { dinnerData } from 'dummy/dinnerData';
import { waiter } from 'utils/waiter';

export const fetchPlates = async ({ page }) => {
  console.log('fetching page:', page);
  // instead of dummy we call await api here
  await waiter(1000);
  return { data: dinnerData };
};
