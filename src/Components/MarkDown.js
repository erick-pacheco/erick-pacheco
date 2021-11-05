import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkDown({ fetchUrl }) {
  const [mdFile, setMdFile] = useState(`loading.....`);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.text())
      .then((text) => setMdFile(text))
      .catch((err) => setMdFile(err.text()));
  }, []);

  return (
    <div>
      <ReactMarkdown children={mdFile} />
    </div>
  );
}
