import React from "react";
import { useStateValue, selectors } from "../data";
import { types } from "../data/reducer";

export default function Themer() {
  const [{ theme }, dispatch] = useStateValue();

  const toggleTheme = () => {
    const { TOGGLE_THEME } = types;
    dispatch({ type: TOGGLE_THEME });
  };

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const themeIcon = (theme) =>
    theme === "dark" ? (
      <i className="far fa-moon"></i>
    ) : (
      <i className="far fa-sun"></i>
    );

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={toggleTheme}
          
        />
        <label
          className={`form-check-label ${selectors.textColor(theme)}`}
          for="flexSwitchCheckDefault"
        >
          {themeIcon(theme)}
          &nbsp;
          {capitalizeFirstLetter(theme)}
        </label>
      </div>
    </>
  );
}
