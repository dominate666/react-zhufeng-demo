// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";
import { symbol } from "prop-types";
const root = ReactDOM.createRoot(document.getElementById("root"));
let list = [
  {
    id: 1,
    title: "11",
  },
  {
    id: 2,
    title: "22",
  },
];
root.render(
  <>
    <h1>今日新闻</h1>
    <ul>
      {list.map((item, index) => {
        return (
          <li key={item.id}>
            <p>
              {item.id}
              {item.title}
            </p>
          </li>
        );
      })}
    </ul>
    {/* new Array(5)  稀疏数组不能使用foreach方法,fill后变成密集数组 */}
    {new Array(5).fill(null).map((_, index) => {
      return <button key={index}>按钮{index + 1}</button>;
    })}
  </>
);
