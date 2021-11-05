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

  const opposite = theme => theme === 'dark' ? 'light' : 'dark'

  const themeIcon = (theme) =>
    theme === "dark" ? (
      <div className={animated('yellow', animations.animate__fadeInDown)}>
        <i className="far fa-sun"></i>&nbsp; Go {capitalizeFirstLetter(opposite(theme))} Mode
      </div>
    ) : (
      <div className={animated('blue', animations.animate__fadeInUp)}>
        <i className="far fa-moon"></i>&nbsp;Go {capitalizeFirstLetter(opposite(theme))} Mode
      </div>
    );

  return (
    <>
      <span type='button'onClick={toggleTheme}>
        {themeIcon(theme)}
      </span>
    </>
  );
}
