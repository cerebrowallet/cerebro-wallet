import { useState, useEffect, useRef, useCallback } from 'react';
// @ts-ignore
import createActivityDetector from 'activity-detector';

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

export function useKeyPress(targetKey: string): boolean {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = useCallback(
    ({ key }: { key: string }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    },
    [targetKey]
  );

  const upHandler = useCallback(
    ({ key }: { key: string }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    },
    [targetKey]
  );

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [downHandler, upHandler]);

  return keyPressed;
}

export const useIdle = (options: {
  timeToIdle: number;
  inactivityEvents: string[];
}): boolean => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    const activityDetector = createActivityDetector(options);
    activityDetector.on('idle', () => setIsIdle(true));
    activityDetector.on('active', () => setIsIdle(false));
    return () => activityDetector.stop();
  }, [options]);

  return isIdle;
};

export function useOnClickOutside(
  ref: any,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export function usePrevious<T>(value: any) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current as T;
}
