import { useRef, useEffect } from "react";

export const useUpdateEffect = (cb, dependencies) => {
  const renderRef = useRef(true);

  useEffect(() => {
    if (renderRef.current) {
      renderRef.current = false;
      return;
    }

    return cb();
  }, [cb, dependencies]);
};
