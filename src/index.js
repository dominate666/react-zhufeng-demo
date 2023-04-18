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
Array.prototype.BB = 10;
let arr = [1, 2];
arr[Symbol("AA")] = 50;
let keys = Reflect.ownKeys(arr);
let m = Object.getOwnPropertyNames(arr); //获取对象非symbol的私有属性(无关是否可枚举)
let n = Object.getOwnPropertySymbols(arr); //获取对象的symbol的私有属性
m = [...m, ...n];
console.log("m", m);
console.log("keys", keys);
