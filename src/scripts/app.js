import React from "react";
import ReactDOM from "react-dom";

import "../styles/main.scss";

const root = document.getElementById("root");
const el = (
  <div>
    <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black">
      text
    </button>
  </div>
);

ReactDOM.render(el, root);
