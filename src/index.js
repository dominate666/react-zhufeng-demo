// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";
const root = ReactDOM.createRoot(document.getElementById("root"));

let text = "培训";
let flag = true;
root.render(
  <>
    <h2
      style={{
        color: "orange",
        fontSize: "50px",
      }}
      className="box"
    >
      {text}
    </h2>

    <button
      style={{
        display: flag ? "block" : "none",
      }}
    >
      按钮1
    </button>
    
    {flag ? <button>按钮2</button> : null}
  </>
);
