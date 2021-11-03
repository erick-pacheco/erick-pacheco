import React from "react";
import { useStateValue } from "../data";

export default function View({ children }) {
  const [{ theme }] = useStateValue();
  const style = {
    minWidth: window.screen.availWidth,
    minHeight: window.screen.availHeight,
  };

  return (
    <div style={style} className={`bg bg-${theme}`}>
      {children}
    </div>
  );
}
