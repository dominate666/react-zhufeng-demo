import React from "react";
// import style from './header.less'
import "./header.less";
export default function header(props) {
  let { title, openInput } = props;
  return (
    <>
      <div className="top">
        <span className="header">{title}</span>
        <span onClick={openInput}>&#43;</span>
      </div>
    </>
  );
}
