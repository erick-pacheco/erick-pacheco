import React from "react";
import MarkDown from "../Components/MarkDown";

export const projects = [
  {
    name: "URL SHORTNER",
    url: "https://e-shorten-url.web.app/",
    img: "https://i.imgur.com/gkguJod.png",
    short_description:
      "An url shortener using Reactjs and deployed to firebase",
    long_description: () => (
      <MarkDown fetchUrl="https://raw.githubusercontent.com/erick-pacheco/url_shortener/master/README.md" />
    ),
  },
];
