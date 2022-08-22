import numberToWords from "number-to-words";
import lodash from "lodash";
import React from "react";
import { createRoot } from 'react-dom/client';

const c = React.createElement;

function App() {
  const { useState } = React;
  const [count, setCount] = useState(10);

  return c(
    "div",
    { className: "wrapper", style: { color: "cornflowerblue", fontSize: "2rem", display: "flex", justifyContent: "center" } },
    c("h1", null, ` ♥ React's lucky number is: ${lodash.upperFirst(numberToWords.toWords(count))}`),
    c("button", { className: "counterBtn", onClick: () => setCount(Math.random() * 10) }, "Update Rank")
  );
}

createRoot(document.getElementById("app")).render(c(App));
