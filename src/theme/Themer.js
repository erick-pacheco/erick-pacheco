import React from "react";
import { useStateValue, selectors } from "../data";
import { types } from "../data/reducer";
import { animated, animations } from './animations'

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
      <div className={animated('', animations.animate__fadeInDown)}>
        <i className="far fa-moon"></i>&nbsp;{capitalizeFirstLetter(theme)}
      </div>
    ) : (
      <div className={animated('', animations.animate__fadeInUp)}>
        <i className="far fa-sun"></i>&nbsp;{capitalizeFirstLetter(theme)}
      </div>
    );

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="themer"
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
        <label
          className={`form-check-label ${selectors.textColor(theme)}`}
          for="themer"
        >
          {themeIcon(theme)}
        </label>
      </div>
    </>
  );
}
