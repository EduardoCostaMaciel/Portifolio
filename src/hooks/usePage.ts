import { useContext } from 'react';

import { PagesContext } from '../contexts/pages-contexts';

export function usePage() {
  return useContext(PagesContext);
}
