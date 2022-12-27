import { useCallback, useEffect, useRef } from "react";

export const useTimeout = (callback, delay) => {
  const callbackRef = useRef(callback);
  const timeOutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeOutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeOutRef.current && clearTimeout(timeOutRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  return { reset, clear };
};
