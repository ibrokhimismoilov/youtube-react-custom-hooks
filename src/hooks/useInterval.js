import { useCallback, useEffect, useRef, useState } from "react";

const initialValue = {
  value: 60,
  delay: 1000,
  differenceValue: 1,
  isRunning: false,
  minValue: 0,
};

export const useInterval = (options = initialValue) => {
  const intervalRef = useRef();

  const [state, setState] = useState({ ...initialValue, ...options });

  console.log("Render", state.value);

  useEffect(() => {
    const { value, isRunning, delay, differenceValue, minValue } = state;

    if (isRunning && value > minValue) {
      intervalRef.current = setTimeout(() => {
        setState((prevState) => {
          const _value = prevState.value - differenceValue;

          return {
            ...prevState,
            value: _value,
            isRunning: _value > minValue,
          };
        });
      }, delay);
    }

    if (intervalRef.current && value <= minValue) {
      clearTimeout(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [state]);

  const toggleHandler = useCallback(
    (toggle) => {
      if (state.isRunning !== toggle) {
        setState((prevState) => ({ ...prevState, isRunning: toggle }));
      }
    },
    [state]
  );

  const resetHandler = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      value: options.value || initialValue.value,
    }));
  }, [options]);

  const clearHandler = useCallback(() => {
    setState({ ...initialValue, ...options });
  }, [options]);

  return { state, toggleHandler, resetHandler, clearHandler };
};
