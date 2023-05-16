import React, { useRef } from "react";

export default function AddInput(props) {
  let { isInputShow, addItem } = props;
  let inputRef = useRef(null);
  let handlePress = (event) => {
    if (event.key === "Enter") {
      submitValue();
    }
  };
  let submitValue = function () {
    let inputValue = inputRef.current?.["value"] || "";
    if (inputValue.length === 0) {
      return;
    }
    addItem(inputValue);
    // @ts-ignore
    inputRef.current.value = "";
  };
  return (
    <>
      {isInputShow ? (
        <div>
          <input type="text" ref={inputRef} onKeyDown={handlePress} />
          <button onClick={submitValue}>添加</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
