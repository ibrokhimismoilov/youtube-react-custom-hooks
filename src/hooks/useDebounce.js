import { useEffect } from "react";
import { useTimeout } from "./useTimeout";

export const useDebounce = (callback, delay, dependencies) => {
  const { resetTimeoutHandler: reset, clearTimeoutHandler: clear } = useTimeout(
    callback,
    delay
  );
  useEffect(reset, [reset, dependencies]);
  useEffect(clear, [clear]);
};
