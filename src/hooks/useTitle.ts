import { useEffect, useState } from 'react';

const useTitle = (): ((pageName: string | undefined) => void) => {
  const [pageName, setPageName] = useState<string | undefined>(undefined);
  useEffect(() => {
    document.title =
      pageName === undefined ? 'QuoteNe' : `${pageName} | QuoteNe`;
  }, [pageName]);
  return (newPageName) => {
    if (pageName !== newPageName) setPageName(newPageName);
  };
};

export default useTitle;
