import React from "react";
import { selectors, useStateValue } from "../data";

export default function PageTitle({ children }) {
  const [{ theme }] = useStateValue();

  return (
    <div className="container px-4 py-2 animate__animated animate__fadeInDown"  id="page-title">
      <h2 className={`pb-2 ${selectors.textColor(theme)} border-bottom`}>{children}</h2>
    </div>
  );
}
