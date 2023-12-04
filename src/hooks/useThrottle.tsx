import { useState } from 'react';

const useThrottle = () => {
  const [throttle, setThrottle] = useState(false);

  const handleThrottle = (onClickBtn: (() => void) | (() => Promise<void>)) => {
    if (throttle) return;
    if (!throttle) {
      setThrottle(true);
      onClickBtn();
      setTimeout(() => {
        setThrottle(false);
      }, 500);
    }
  };

  return handleThrottle;
};

export default useThrottle;
