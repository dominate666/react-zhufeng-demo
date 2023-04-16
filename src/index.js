// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";
import { symbol } from "prop-types";
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
let result = React.createElement(
  React.Fragment,
  null,
  React.createElement("h2", {
    className: "title",
    style: styObj,
  })
);

console.log(React.Fragment);
console.log(result);
