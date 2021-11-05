import React, { useEffect } from "react";
import { useStateValue } from "../data";

export default function View({ children }) {
  const [{ theme }] = useStateValue();
  const style = {
    minWidth: window.screen.availWidth,
    minHeight: window.screen.availHeight,
  };

  useEffect(() => window.scrollTo(0, 0), [])


  return (
    <div style={style} className={`bg bg-${theme}`}>
      {children}
    </div>
  );
}
