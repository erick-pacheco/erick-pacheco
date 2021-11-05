import React from "react";
import MarkDown from "../Components/MarkDown";
import View from "../Components/View";
import { selectors, useStateValue } from "../data";

export default function About() {
  const [{ theme }] = useStateValue();

  return (
    <View>
      <div className={selectors.textColor(theme, "container pt-5")}>
        <MarkDown fetchUrl="https://raw.githubusercontent.com/erick-pacheco/erick-pacheco/v2-react/README.md" />
      </div>
    </View>
  );
}
