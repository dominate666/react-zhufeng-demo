// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";
import { createElement } from "./jsxHandle";
import Vote from './Vote'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Vote title='标题'/>
  </>
);

