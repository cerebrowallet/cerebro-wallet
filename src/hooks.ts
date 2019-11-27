import { useState, useEffect } from 'react';

export interface WindowDimensions {
  width: number;
  height: number;
}

export function useWindowSize(): WindowDimensions {
  function getSize(): WindowDimensions {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
