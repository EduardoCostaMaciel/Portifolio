import { createContext, useState } from 'react';

import { SelectPage } from '../types';

export const PagesContext = createContext({
  page: SelectPage.HOME,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setPage: (value: SelectPage) => {}
});

interface ProviderProps {
  children: React.ReactNode;
}

export function PagesContextProvider({ children }: ProviderProps) {
  const [page, setPage] = useState(SelectPage.HOME);

  return (
    <PagesContext.Provider value={{ page, setPage }}>
      {children}
    </PagesContext.Provider>
  );
}
