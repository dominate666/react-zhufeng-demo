// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
let store = createStore(todoApp);
console.log("store", store.getState());
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Vote title='标题'/> */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
