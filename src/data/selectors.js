export const textColor = (theme, classes) =>
  theme === "dark" ? `text-light ${classes}` : `text-dark ${classes}`;
export const bgColor = (theme, classes) => (theme === "dark" ? `bg bg-dark ${classes}` : `bg bg-light ${classes}`);
