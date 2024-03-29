import { useEffect } from 'react';

const useScroll = (show) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'overlay';
    }
  }, [show]);
};

export default useScroll;
