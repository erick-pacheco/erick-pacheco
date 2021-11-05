import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkDown({ fetchUrl }) {
  const [mdFile, setMdFile] = useState(`Just a link: https://reactjs.com.`);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.text())
      .then((text) => setMdFile(text))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ReactMarkdown children={mdFile} />
    </div>
  );
}
