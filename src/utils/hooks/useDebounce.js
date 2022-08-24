import { useCallback } from "react";

const debounce = (func, timer) => {
  let timeoutId;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(context, args), timer);
  };
};

export const useDebounce = (func, timer) =>
  useCallback(debounce(func, timer), []);
