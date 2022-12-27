import { useCallback, useEffect, useRef } from "react";

export const useTimeout = (callback, delay) => {
  const callbackRef = useRef(callback);
  const timeOutRef = useRef();

  const setTimeoutHandler = useCallback(() => {
    timeOutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clearTimeoutHandler = useCallback(() => {
    timeOutRef.current && clearTimeout(timeOutRef.current);
  }, []);

  const resetTimeoutHandler = useCallback(() => {
    clearTimeoutHandler();
    setTimeoutHandler();
  }, [clearTimeoutHandler, setTimeoutHandler]);

  useEffect(() => {
    setTimeoutHandler();
    return clearTimeoutHandler;
  }, [delay, setTimeoutHandler, clearTimeoutHandler]);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return { resetTimeoutHandler, clearTimeoutHandler };
};
