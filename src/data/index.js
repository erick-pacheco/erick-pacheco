import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { initialState } from "./state";
import { textColor, bgColor } from "./selectors";

// Prepares the dataLayer
const StateContext = createContext();

// Wrap our app and provide the Data layer
const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
const useStateValue = () => useContext(StateContext);

let selectors = {
  textColor,
  bgColor,
};
export {
  StateContext,
  reducer,
  StateProvider,
  useStateValue,
  initialState,
  selectors,
};
