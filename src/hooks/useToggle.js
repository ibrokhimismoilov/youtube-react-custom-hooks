import { useState } from "react";

export const useToggle = (defaultValue = false) => {
  const [toggle, setToggle] = useState(defaultValue);

  function toggleHandler(value) {
    setToggle((prevState) => (typeof value === "boolean" ? value : !prevState));
  }

  return [toggle, toggleHandler];
};
