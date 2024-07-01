import { useEffect } from 'react';

const useDetectMobile = () => {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      alert("For the best experience, please switch to desktop mode in landscape.");
    }
  }, []);
};

export default useDetectMobile;
