// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";
import App from "./components/App";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Vote title='标题'/> */}
    {/* <Provider>
    </Provider> */}
    <App />
  </>
);
