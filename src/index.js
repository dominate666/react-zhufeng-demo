// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>培训</div>
  </React.StrictMode>
);

fetch("/jian/subscriptions/recommended_collections")
  .then((res) => res.json())
  .then((data) => {
    console.log("简书", data);
  });

fetch("/zhi/news/latest")
  .then((res) => res.json())
  .then((data) => console.log("知乎", data));
