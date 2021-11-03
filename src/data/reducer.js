export const types = {
  TOGGLE_THEME: "TOGGLE_THEME",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    default:
      return state;
  }
};

export default reducer;
