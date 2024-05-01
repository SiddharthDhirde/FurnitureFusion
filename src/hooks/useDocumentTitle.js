import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'Furniture Fusion - Ecommerce App';
    }
  }, [title]);
};

export default useDocumentTitle;
