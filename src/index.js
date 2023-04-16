// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";
import { createElement } from "./jsxHandle";

const root = ReactDOM.createRoot(document.getElementById("root"));
let styObj = {
  color: "orange",
  fontSize: "50px",
};
root.render(
  <>
    <h2 className="title" style={styObj}></h2>
  </>
);

// 编译后的结果
let result = createElement(
  React.Fragment,
  null,
  createElement("h2", {
    className: "title",
    style: styObj,
  })
);

console.log(result);
