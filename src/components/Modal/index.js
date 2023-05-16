import React from "react";
import "./index.less";
export default function Modal(props) {
  let { isShowModal, modalTitle, children } = props;
  return (
    <>
      {isShowModal ? (
        <div className="modal">
          <div className="inner">
            <div className="m-header">{modalTitle}</div>
            <div className="content-wrapper">{children}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
